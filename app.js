var pdfText = require('pdf-text');
var fs = require('fs');
fs.unlink("tax.csv");
fs.readdir('./tax', function (err, files) {
    for (var i = 0; i < files.length; i++) {
        var pathToPdf = "./tax/" + files[i];
        pdfText(pathToPdf, function (err, chunks) {
            //console.log(chunks);
            for (var i = 0; i < chunks.length; i++) {
                //console.log(chunks[i].match(/([0-9]{1,2}\/[0-9]{1,2})/mg));
                //console.log("--------------------------");
                if (chunks[i].match(/([0-9]{1,2}\/[0-9]{1,2})/mg) == chunks[i]) {
                    var description = "";
                    var withdrawl = 0;
                    if (chunks[i + 2].match(/([0-9]?,?[0-9]{1,3}\.[0-9]{1,2})/mg) == chunks[i + 2]) {
                        withdrawl = parseFloat(chunks[i + 2]);
                        description = chunks[i + 1];
                    } else if (chunks[i + 3].match(/([0-9]?,?[0-9]{1,3}\.[0-9]{1,2})/mg) == chunks[i + 3]) {
                        withdrawl = parseFloat(chunks[i + 3]);
                        description = chunks[i + 1] + " - " + chunks[i + 2];
                    }
                    if (withdrawl > 70) {
                        var line = '"' + chunks[i] + '/2015","' + description + '","' + withdrawl + '"\n';
                        console.log(line);
                        fs.appendFile('tax.csv', line, function (err) {
                            if (err) throw err;
                        });
                    }
                }
            }
        });
    }

});
