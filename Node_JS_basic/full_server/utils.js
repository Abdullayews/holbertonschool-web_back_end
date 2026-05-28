import { readFile } from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data
        .toString()
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = {};

      lines.slice(1).forEach((line) => {
        const cols = line.split(',');
        const firstName = cols[0];
        const field = cols[3];
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      });

      resolve(students);
    });
  });
}
