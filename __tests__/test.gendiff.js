// const genDiff = require('../src/gendiffLogick');
import genDiff from '../src/gendiffLogick.js'
const file1 = require('../__fixtures__/file1.json');
const file2 = require('../__fixtures__/file2.json');
const result = require('../__fixtures__/etalonFile.json');
describe('genDiff', () => {
    test("Тест 1", () => {
        expect(genDiff(file1,file2)).toEqual(result)
    })  
})

// Временный костыль для запуска jest с ключами --experimental-vm-modules и, опционально, --no-warnings;
//  загуглить и найти/либос верить с эталонным репозиторием