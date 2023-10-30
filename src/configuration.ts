import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

export default () => {
  const filePath = join(__dirname, '..', 'application.yml');
  return yaml.load(readFileSync(filePath, 'utf-8')) as Record<string, any>;
};
