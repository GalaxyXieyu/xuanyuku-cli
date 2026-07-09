#!/usr/bin/env node
// 打包 xuanyuku CLI 为单文件 tarball,用于自有 CDN 分发(WorkBuddy 限免渠道,T480)。
// 产物: dist-pack/xuanyuku-cli-<version>.tgz,安装方式: npm i -g <tarball URL>
import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync, readFileSync, copyFileSync, readdirSync } from 'node:fs';
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

writeFileSync(
  join(stageDir, 'package.json'),
  JSON.stringify(
    {
      name: 'xuanyuku-cli',
      version: cliPkg.version,
      description: '蛋龟选育库 CLI(AI 宠物助理渠道分发包)',
      bin: { xuanyuku: 'bin/xuanyuku.js' },
      engines: { node: '>=18' },
    },
    null,
    2
  )
);

execSync('npm pack --pack-destination ..', { cwd: stageDir, stdio: 'inherit' });
rmSync(stageDir, { recursive: true, force: true });

const tarball = readdirSync(outDir).find((f) => f.endsWith('.tgz'));
// CDN 上传时同时复制一份 latest 别名,技能包里的安装命令固定指向 latest
copyFileSync(join(outDir, tarball), join(outDir, 'xuanyuku-cli-latest.tgz'));
console.log(`\n✓ 产物: dist-pack/${tarball} (+ xuanyuku-cli-latest.tgz)`);
console.log('  上传至: https://cdn.xuanyuku.cn/cli/');
console.log('  安装:   npm i -g https://cdn.xuanyuku.cn/cli/xuanyuku-cli-latest.tgz');
