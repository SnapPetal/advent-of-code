import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';

function getMaxCalories() {
  const csvFilePath = path.resolve(__dirname, '01.csv');
  let fileData: Object[] = [];
  let caloriesArray: number[] = [];
  let currentCalories = 0;

  fs.createReadStream(csvFilePath)
    .pipe(parse())
    .on('data', (data) => fileData.push(data))
    .on('end', () => {
      fileData.forEach((item, _index, _array) => {
        const value = Math.floor(Number(item));
        if (value === 0) {
          caloriesArray.push(currentCalories);
          currentCalories = 0;
        }
        currentCalories += value;
      });
      caloriesArray.sort((a, b) => b - a);
      console.log(caloriesArray[0] + caloriesArray[1] + caloriesArray[2]);
    });
}
getMaxCalories();