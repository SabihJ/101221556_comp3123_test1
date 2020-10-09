var fs = require('fs')
const process = require('process'); 

if (!fs.existsSync('Log')){
    fs.mkdirSync('Log');
}
try { 
    console.log(__dirname)
    process.chdir(__dirname+'/Log'); 
    console.log("directory has successfully been changed");
    for (let i = 1; i <11; i++){
        fs.writeFile('test' + i + '.txt', 'this is file ' + i, (err)=> {})
    }
    fs.readdir(__dirname+'/Log', (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      });
  } catch (err) {         
    console.error("error while changing directory"); 
  } 