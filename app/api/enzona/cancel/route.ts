import { NextResponse } from "next/server";


import fs from "fs"


export async function POST(request: Request) {
   // Import the necessary libraries.

// Create a new file and write data to it.
fs.writeFile('cancel.txt', JSON.stringify(request), (err: any) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// Close the file.
fs.close(fs.openSync('data.txt', 'w'), (err: any) => {
  if (err) throw err;
  console.log('The file has been closed!');
});

      return NextResponse.json("cancel");

  }
  
