import { readFileSync } from "fs";
import path from 'path';
import yaml from 'js-yaml';

export default function parser (filePath)  {
  const fileExt = path.extname(filePath);
  if (fileExt === '.yml' || fileExt === '.yaml') {
    return yaml.load(readFileSync(filePath, 'utf-8'));
  }
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}