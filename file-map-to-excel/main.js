#!/usr/bin/env node

import * as fs from 'fs';
import xlsx from 'xlsx';

const excelFilename = "list.xlsx";
const directory = "./listing/";

function mapFiles() {
  
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      const workbook = xlsx.utils.book_new();
      let out = [];
      files.forEach(file => {
        out.push([file]);
      })
      let ws = xlsx.utils.aoa_to_sheet(out);
      xlsx.utils.book_append_sheet(workbook, ws, 'Sheet1');

      xlsx.writeFile(workbook, excelFilename);
    }
  });

}

(() => { mapFiles(); })();
