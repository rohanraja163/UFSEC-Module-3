const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () =>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'promisewrite.txt'),data); 
        await fsPromises.appendFile(path.join(__dirname,'promisewrite.txt'),'\nNice to meet you'); 
        await fsPromises.renameFile(path.join(__dirname,'promisewrite.txt'),path.join(__dirname,'promisecomplete.txt'));
        const newdata = await fsPromises.readFile(path.join(__dirname,'promisecomplete.txt'),'utf8');
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

fileOps();

/*
fs.writeFile(path.join(__dirname,'reply.txt'),
    'Nice to meet you',
    (err) => {
        if (err) throw err;
        console.log("Write complete");

        fs.appendFile(path.join(__dirname,'reply.txt'),
        'You too',
        (err) => {
            if (err) throw err; 
            console.log("Append complete");

            fs.renameFile(path.join(__dirname,'reply.txt'),path.join(__dirname,'NEWreply.txt'),(err) => {
                if (err) throw err; 
                console.log("Rename complete");
            })
        }) 
     
}) 

process.on('uncaughtException', err => {
    console.error(`Uncaught error ${err}`);
    process.exit(1);
})
*/