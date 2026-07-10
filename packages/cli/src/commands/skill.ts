import { Command } from 'commander';
import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';

// 内置技能目录:tgz 安装后位于 package/skills(与 bin/ 同级);
// 源码 tsc 运行时(dist/commands/)回退到仓库根目录 skills/
function resolveBundledSkillsDir(): string | null {
  const candidates = [
    join(__dirname, '..', 'skills'),
    join(__dirname, '..', '..', '..', '..', 'skills'),
  ];
  for (const dir of candidates) {
    if (existsSync(dir) && statSync(dir).isDirectory()) {
      return dir;
    }
  }
  return null;
}

function listBundledSkills(skillsDir: string): string[] {
  return readdirSync(skillsDir).filter((name) =>
    existsSync(join(skillsDir, name, 'SKILL.md'))
  );
}

export function registerSkillCommands(program: Command): void {
  const skillCmd = program
    .command('skill')
    .description('Manage bundled AI assistant skills');

  skillCmd
    .command('list')
    .description('List skills bundled with this CLI package')
    .action(() => {
      const skillsDir = resolveBundledSkillsDir();
      if (!skillsDir) {
        console.error('✗ 未找到内置技能目录(此安装包可能不含技能)');
        process.exit(1);
      }
      const skills = listBundledSkills(skillsDir);
      if (skills.length === 0) {
        console.log('内置技能目录为空');
        return;
      }
      console.log(`内置技能(${skills.length} 个):`);
      for (const name of skills) {
        console.log(`  - ${name}`);
      }
    });

  skillCmd
    .command('install [name]')
    .description('Install bundled skill(s) to the Claude skills directory')
    .option('--target <dir>', 'Target skills directory (default: ~/.claude/skills)')
    .action((name: string | undefined, opts: { target?: string }) => {
      const skillsDir = resolveBundledSkillsDir();
      if (!skillsDir) {
        console.error('✗ 未找到内置技能目录(此安装包可能不含技能)');
        process.exit(1);
      }

      const available = listBundledSkills(skillsDir);
      if (available.length === 0) {
        console.error('✗ 内置技能目录为空');
        process.exit(1);
      }

      let toInstall: string[];
      if (name) {
        if (!available.includes(name)) {
          console.error(`✗ 未找到技能 "${name}",可用: ${available.join(', ')}`);
          process.exit(1);
        }
        toInstall = [name];
      } else {
        toInstall = available;
      }

      const targetRoot = opts.target
        ? resolve(opts.target)
        : join(homedir(), '.claude', 'skills');
      mkdirSync(targetRoot, { recursive: true });

      for (const skill of toInstall) {
        const dest = join(targetRoot, skill);
        cpSync(join(skillsDir, skill), dest, { recursive: true, force: true });
        console.log(`✓ 已安装 ${skill} -> ${dest}`);
      }
      console.log('技能安装完成,重启 Claude 会话后生效');
    });
}
