import cs from '../messages/cs.json';
import en from '../messages/en.json';
import _ from 'lodash';

describe('lang', function() {

    const keys = {
        cs: _.sortBy(_.keys(cs)),
        en: _.sortBy(_.keys(en)),
    };
    // eslint-disable-next-line jest/expect-expect
    it('cs vs en', function() {
        checkKeys(cs, en, keys.cs);
    });
});

function checkKeys(lang1, lang2, keys = []) {
    const diffMissing = _.difference(_.keys(lang1), _.keys(lang2));
    const diffExtra = _.difference(_.keys(lang2), _.keys(lang1));
    expect(diffMissing).toEqual([], 'Keys not in 1');
    expect(diffExtra).toEqual([], 'Missing keys in 2');

    keys.forEach(k => {
        const type1 = typeof lang1[k];
        const type2 = typeof lang2[k];
        if (type1 !== type2) {
            throw ('different types: ' + k);
        }
        if (type1 === 'object') {
            checkKeys(lang1[k], lang2[k], _.keys(lang1[k]));
        }
    });
}
