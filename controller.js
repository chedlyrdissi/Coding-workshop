// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName){
    let data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// This is the controler per se, with the get/post
module.exports = {
    controller: function(app){

        app.get('/home', function(req, res){
            // /home/:id -> req.params.id
            let data = {};
            res.json(data);
        });

        app.post('/home', urlencodedParser, (req, res) => {
            let data = {};
            res.json(data);
        });

    }
}