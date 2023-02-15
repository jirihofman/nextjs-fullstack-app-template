import { getLangIcon, niceBytes } from '../util';

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

describe.skip('niceBytes', () => {
    it('KB', () => {
        expect(niceBytes(2148)).toBe('2.1 KB');
    });
});
