const csv = require('csvtojson');
const csvFilePath='./sample.csv';

let properties = [];
var i = 0;
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    properties.push(jsonObj);
    console.log(i++);
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
})
.on('done',(error)=>{
    if (error) {
      console.log(error);
    }
    console.log(properties.length);
    console.log('end')
})
