// TODO: What are we importing?
// Importing in the file system (fs) library from the node software that we installed 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 1. file name to append to log.txt
// 2. date to append which is process.argv[2]
// 3. Callback with error handling 
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
// 1. Checks if the error exists
// 2. if error is True console log err
// 3. If error is false console log Commit logged 
  err ? console.error(err) : console.log('Commit logged!')
);


// method appends to the log.txt file