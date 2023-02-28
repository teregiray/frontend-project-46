const genDiff = require('../src/gendiffLogick');

const file1 = require('../__fixtures__/file1.json');
const file2 = require('../__fixtures__/file2.json');
const result = require('../__fixtures__/etalonFile.json');
describe('genDiff', () => {
    test("Тест 1", () => {
        expect(genDiff(file1,file2)).toEqual(result)
    })  
})

