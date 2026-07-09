import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { homedir } from 'node:os';

export interface Profile {
  login: string;
  apiBaseUrl?: string;
  tenantId?: string;
  tenantSlug?: string;
  role?: string;
  isSuperAdmin?: boolean;
  accessToken: string;
  tokenIssuedAt?: string;
  refreshToken?: string;
  apiKey?: string;
  apiKeyId?: string;
}

const PROFILES_DIR = path.join(homedir(), '.xuanyuku', 'profiles');

async function ensureDir(): Promise<void> {
  const baseDir = path.join(homedir(), '.xuanyuku');
  await fs.mkdir(baseDir, { recursive: true, mode: 0o700 });
  await fs.mkdir(PROFILES_DIR, { recursive: true, mode: 0o700 });
}

export async function loadProfile(name: string): Promise<Profile | null> {
  try {
    await ensureDir();
    const profilePath = path.join(PROFILES_DIR, `${name}.json`);
    const content = await fs.readFile(profilePath, 'utf-8');
    return JSON.parse(content) as Profile;
  } catch {
    return null;
  }
}

export async function saveProfile(name: string, profile: Profile): Promise<void> {
  await ensureDir();
  const profilePath = path.join(PROFILES_DIR, `${name}.json`);
  await fs.writeFile(profilePath, JSON.stringify(profile, null, 2), { mode: 0o600 });
}

export async function listProfiles(): Promise<string[]> {
  try {
    await ensureDir();
    const files = await fs.readdir(PROFILES_DIR);
    return files
      .filter((f) => f.endsWith('.json'))
      .map((f) => f.slice(0, -5));
  } catch {
    return [];
  }
}

export async function removeProfile(name: string): Promise<void> {
  try {
    const profilePath = path.join(PROFILES_DIR, `${name}.json`);
    await fs.unlink(profilePath);
  } catch {
    // Ignore if file doesn't exist
  }
}

export async function clearProfileToken(name: string): Promise<void> {
  const profile = await loadProfile(name);
  if (profile) {
    profile.accessToken = '';
    await saveProfile(name, profile);
  }
}
