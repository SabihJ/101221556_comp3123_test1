var fs = require('fs')

if (fs.existsSync('Log')){

    //check files
    fs.readdir('Log', (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });

    fs.rmdir('Log', { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    
        console.log(`${dir} is deleted!`);
    });
}
else
    console.log('doesnt exist')
