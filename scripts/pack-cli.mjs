#!/usr/bin/env node
// 打包 xuanyuku CLI 为单文件 tarball,用于自有 CDN 分发(WorkBuddy 限免渠道,T480)。
// 产物: dist-pack/xuanyuku-cli-<version>.tgz,安装方式: npm i -g <tarball URL>
import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readFileSync, copyFileSync, readdirSync, existsSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cliPkg = JSON.parse(readFileSync(join(root, 'packages/cli/package.json'), 'utf8'));
const outDir = join(root, 'dist-pack');
const stageDir = join(outDir, 'stage');

rmSync(outDir, { recursive: true, force: true });
mkdirSync(join(stageDir, 'bin'), { recursive: true });

await build({
  entryPoints: [join(root, 'packages/cli/src/bin/xuanyuku.ts')],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: join(stageDir, 'bin/xuanyuku.js'),
  // 从源码打包 @xuanyuku/shared,无需先 tsc 构建;入口自带 shebang,esbuild 会保留
  alias: { '@xuanyuku/shared': join(root, 'packages/shared/src/index.ts') },
  minify: false,
  logLevel: 'info',
});

// 随包携带 AI 助理技能,安装后可用 `xuanyuku skill install` 落到 ~/.claude/skills/
cpSync(join(root, 'skills'), join(stageDir, 'skills'), { recursive: true });

writeFileSync(
  join(stageDir, 'package.json'),
  JSON.stringify(
    {
      name: 'xuanyuku-cli',
      version: cliPkg.version,
      description: '蛋龟选育库 CLI(AI 宠物助理渠道分发包)',
      bin: { xuanyuku: 'bin/xuanyuku.js' },
      files: ['bin', 'skills'],
      engines: { node: '>=18' },
    },
    null,
    2
  )
);

execSync('npm pack --pack-destination ..', { cwd: stageDir, stdio: 'inherit' });
rmSync(stageDir, { recursive: true, force: true });

const tarball = readdirSync(outDir).find((f) => f.endsWith('.tgz'));
// 产物同步到 releases/(随仓库分发,GitHub raw 直链下载);latest 别名供技能包固定引用
const releasesDir = join(root, 'releases');
mkdirSync(releasesDir, { recursive: true });
copyFileSync(join(outDir, tarball), join(releasesDir, tarball));
copyFileSync(join(outDir, tarball), join(releasesDir, 'xuanyuku-cli-latest.tgz'));
// 若主站仓库在本机,同步到 apps/web/public/cli/(部署后从 https://xuanyuku.cn/cli/ 下载)
const webPublicCli = join(root, '../Eggturtle-breeding-library/apps/web/public/cli');
if (existsSync(dirname(webPublicCli))) {
  mkdirSync(webPublicCli, { recursive: true });
  copyFileSync(join(outDir, tarball), join(webPublicCli, tarball));
  copyFileSync(join(outDir, tarball), join(webPublicCli, 'xuanyuku-cli-latest.tgz'));
  console.log('✓ 已同步主站 apps/web/public/cli/(需 commit + 部署主站生效)');
}

console.log(`\n✓ 产物: releases/${tarball} (+ xuanyuku-cli-latest.tgz),commit + push 后即可下载`);
console.log('  主地址: npm i -g https://xuanyuku.cn/cli/xuanyuku-cli-latest.tgz(需主站已部署)');
console.log('  备地址: npm i -g https://raw.githubusercontent.com/GalaxyXieyu/xuanyuku-cli/main/releases/xuanyuku-cli-latest.tgz');
