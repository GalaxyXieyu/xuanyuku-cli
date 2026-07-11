#!/usr/bin/env node
import { Command } from 'commander';
import { registerAuthCommands } from '../commands/auth';
import { registerApiKeyCommands } from '../commands/apikey';
import { registerShareCommands } from '../commands/shares';
import { registerProductCommands } from '../commands/products';
import { registerAiCommands } from '../commands/ai';
import { registerMarketCommands } from '../commands/market';
import { registerSalesCommands } from '../commands/sales';
import { registerFeaturedCommands } from '../commands/featured';
import { registerSeriesCommands } from '../commands/series';
import { registerStatsCommands } from '../commands/stats';
import { registerArticleCommands } from '../commands/article';
import { registerUserCommands } from '../commands/users';
import { registerCertificateCommands } from '../commands/certificate';
import { registerSkillCommands } from '../commands/skill';

const program = new Command();

program
  .name('xuanyuku')
  .description('Xuanyuku CLI for content management and market intelligence')
  .version('0.1.2');

// Register command groups
registerAuthCommands(program);
registerApiKeyCommands(program);
registerShareCommands(program);
registerProductCommands(program);
registerAiCommands(program);
registerMarketCommands(program);
registerSalesCommands(program);
registerFeaturedCommands(program);
registerSeriesCommands(program);
registerStatsCommands(program);
registerArticleCommands(program);
registerUserCommands(program);
registerCertificateCommands(program);
registerSkillCommands(program);

program.parse(process.argv);

// Handle top-level errors
process.on('unhandledRejection', (err) => {
  console.error('错误:', err instanceof Error ? err.message : String(err));
  process.exit(1);
});