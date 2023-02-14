import { getLangIcon } from '../util';

describe('getLangIcon', () => {
    it('cz', () => {
        expect(getLangIcon('cs')).toBe('🇨🇿');
    });
    it('en', () => {
        expect(getLangIcon('en')).toBe('🇬🇧');
        expect(getLangIcon()).toBe('🇬🇧');
        expect(getLangIcon('')).toBe('🇬🇧');
        expect(getLangIcon('foo')).toBe('🇬🇧');
    });
});
