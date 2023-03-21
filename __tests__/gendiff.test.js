import genDiff from '../src/gendiffLogick.js';
import { fileURLToPath } from 'url';
import * as path from 'path'
import { readFileSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
    test("difference from plain json", () => {
        const filePath1 = getFixturePath('file1.json');
        const filePath2 = getFixturePath('file2.json');
        const expectedResult = readFile('expected_plain.json');
        const result = genDiff(filePath1,filePath2)
        expect(result).toEqual(expectedResult);
    });
    test("difference from nested yaml", () => {
        const filePath1 = getFixturePath('file1.yml');
        const filePath2 = getFixturePath('file2.yml');
        const expectedResult = readFile('expected_nested.json');
        const result = genDiff(filePath1,filePath2)
        expect(result).toEqual(expectedResult);
    })
});

