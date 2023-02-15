export const getLangIcon = (lang = 'en') => {
    switch (lang) {
        case 'en':
            return '🇬🇧';
        case 'cs':
            return '🇨🇿';
        default:
            return '🇬🇧';
    }
};

// Taken from https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
export const niceBytes = (a) => { let b = 0, c = parseInt(a, 10) || 0; for (; 1024 <= c && ++b;)c /= 1024; return c.toFixed(10 > c && 0 < b ? 1 : 0) + ' ' + ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][b]; };
