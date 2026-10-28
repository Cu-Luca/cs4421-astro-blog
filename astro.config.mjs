// @ts-check

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import sharedConfig from './astro.shared.mjs';

export default defineConfig({
	...sharedConfig,
	output: 'server',
	adapter: node({ mode: 'standalone' }),
});