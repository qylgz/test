const fs = require('fs');
fs.readFile('./res/为学.md', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
})
