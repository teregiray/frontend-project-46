import genDiff from '../src/gendiffLogick.js';
import { fileURLToPath } from 'url';
import * as path from 'path'
import { readFileSync } from 'fs';
import { stringify } from '../src/gendiffLogick.js';
import exp from 'constants';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(genDiff(readFile("file1.json","file2.json")))
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
    test("Тест 1", () => {
        const filePath1 = getFixturePath('file1.json');
        const filePath2 = getFixturePath('file2.json');
        const expectedResult = stringify(readFile('expected_file.json'));
        expect(genDiff(filePath1,filePath2)).toEqual(expectedResult);
    });
});

