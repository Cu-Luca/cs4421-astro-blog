import { defineConfig } from 'astro/config';
import sharedConfig from './astro.shared.mjs';

export default defineConfig({
	...sharedConfig,
	output: 'static',
});
