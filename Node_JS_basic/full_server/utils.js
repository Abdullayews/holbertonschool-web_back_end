import { readFile } from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(err);

      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
      const students = {};

      lines.slice(1).forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      });

      resolve(students);
    });
  });
}
