import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { homedir } from 'node:os';

export interface Config {
  defaultProfile?: string;
  apiBaseUrl?: string;
}

export async function resolveApiBase(opts: {
  apiBaseFlagValue?: string;
  apiBaseEnv?: string;
  profileConfig?: Config;
}): Promise<string> {
  // Priority: CLI flag > ENV var > config file > default
  if (opts.apiBaseFlagValue) {
    return opts.apiBaseFlagValue;
  }

  if (opts.apiBaseEnv) {
    return opts.apiBaseEnv;
  }

  if (opts.profileConfig?.apiBaseUrl) {
    return opts.profileConfig.apiBaseUrl;
  }

  return 'https://xuanyuku.cn';
}

export async function loadGlobalConfig(): Promise<Config> {
  try {
    const configPath = path.join(homedir(), '.xuanyuku', 'config.json');
    const content = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(content) as Config;
  } catch {
    return {};
  }
}

export async function saveGlobalConfig(config: Config): Promise<void> {
  const configDir = path.join(homedir(), '.xuanyuku');
  const configPath = path.join(configDir, 'config.json');

  await fs.mkdir(configDir, { recursive: true, mode: 0o700 });
  await fs.writeFile(configPath, JSON.stringify(config, null, 2), { mode: 0o600 });
}
