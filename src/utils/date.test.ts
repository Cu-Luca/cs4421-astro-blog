import { describe, expect, it } from 'vitest';
import { formatDate } from './date';

describe('formatDate', () => {
	it('formats a date as a readable US date', () => {
		expect(formatDate(new Date('2024-01-15T00:00:00.000Z'))).toBe(
			'January 15, 2024',
		);
	});
});
