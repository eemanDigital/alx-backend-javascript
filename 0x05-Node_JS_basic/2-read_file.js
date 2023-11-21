const fs = require('fs')
const path = require('path')


function countStudents(fileDir){
    const file = fs.readFileSync(fileDir, 'utf-8', (err, data)=> {
        if(!file) console.err(err)
    })
   
    return console.log("file loaded")
}

const dir = path.join(__dirname, './databas.csv') 
// const dir = path.join('data.csv');


countStudents(dir)