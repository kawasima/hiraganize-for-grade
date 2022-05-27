const kuromoji = require('kuromoji');
const { containsUnlearnedKanji } = require('./kanji');

type Word = {
    surface: string;
    reading: string;
}

function katakanaToHiragana(src) {
	return src.replace(/[\u30a1-\u30f6]/g, function(match) {
		var chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
}

function hiraganize(sentence: string, grade: number = 6): Promise<string> {
    return new Promise(function(resolve, reject) {
        kuromoji.builder({ dicPath: "node_modules/kuromoji/dict"})
            .build(function(err, tokenizer) {
                const tokens = tokenizer.tokenize(sentence);
                resolve(tokens.map(t => hiraganizeSingleWord({
                    surface: t.surface_form,
                    reading: katakanaToHiragana(t.reading)
                }, grade)).join(''));
            });
    });
}

function hiraganizeSingleWord(word: Word, grade: number) : string {
    return containsUnlearnedKanji(word.surface, grade) ? word.reading : word.surface;
}

export { hiraganize }