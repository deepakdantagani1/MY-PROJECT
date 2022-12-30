class Fs_proxy{
    constructor(fs){
        this.fs = fs;
    }

    readFile(path, formate, callback){
        if(path.match(/.md$|.MD$/)){
            return callback(new Error(`can only read Markdown files.`));
        }
        this.fs.readFile(path, formate, (error, content) =>{
            if(error){
                console.error(error);
                return callback(error);
            }
            return callback(null, content);
        });
    }
}

module.exports = Fs_proxy;