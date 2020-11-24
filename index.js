const { randomBytes } = require('crypto');

fs = require('fs');

function criarArquivo(path, file){

    fs.writeFile(path, file, function(err, data){

        if (err) {
            return console.log(err);
        }
        console.log(data);

    });

}

for(var x = 0; x <= 5; x++){

    criarArquivo('file' + x + '.html', '<div>Este é apenas um teste</div>');

}