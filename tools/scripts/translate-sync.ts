import * as xliff from 'xliff';
import { google } from 'googleapis';

import { exec } from 'child_process';
import { promises } from 'fs';
import { join } from 'path';

// first extract messages.xlif from code.

exec('ng xi18n --output-file messages.xlf', (err, stdout, stderr) => {
  if (err) {
    process.exit(1);
  }
  console.log(stdout);
  const file = promises
    .readFile(join(process.cwd(), 'messages.xlf'))
    .then(file => {
      console.log('received file', String(file));
      xliff.xliff2js('messages.xlf', () => {});
    });
});
