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

// 1)Временный костыль для запуска jest с ключами --experimental-vm-modules и, опционально, --no-warnings;
//  загуглить и найти/либос верить с эталонным репозиторием
// 2)Узнать что такое dirname, прочитать статью на хекслете
// 3)Как-то это скомбинировать и написать тесты(разбить этот шаг на несколько шагов)