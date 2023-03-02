import genDiff from '../src/gendiffLogick.js';
import { fileURLToPath } from 'url';
import * as path from 'path'
import { readFileSync } from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');