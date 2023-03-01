import genDiff from '../src/gendiffLogick.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
    test("Тест 1", () => {
        const filePath1 = getFixturePath('file1.json');
        const filePath2 = getFixturePath('file2.json');
        const expectedResult = readFile('expected_file.json');
        expect(genDiff(filePath1,filePath2)).toEqual(expectedResult);
    });
});

// Для начала тесты запускаются в корневом каталоге:

// project$ npx -n --experimental-vm-modules jest