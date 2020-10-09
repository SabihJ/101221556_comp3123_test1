var fs = require('fs')
var path = require('path')

if (fs.existsSync('Log')){

    //check files
    fs.readdir('Log', (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });

    //remove files
    fs.readdir('Log', (err, files) => {
        if (err) throw err;
      
        for (const file of files) {
            console.log('Removing file ' + file)
          fs.unlink(path.join('Log', file), err => {
            if (err) throw err;
          });
        }
      });

    
    //remove dir
    fs.rmdir('Log', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    
        console.log(`Log is deleted!`);
    });
}
else
    console.log('doesnt exist')
