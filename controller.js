// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
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
            let data = readData('name');
            res.json(data);
        });

        app.post('/home/:index', urlencodedParser, (req, res) => {
            console.log(req.params);
            // console.log(req.params);
            const i = Number(req.params.index);
            
            let data = readData('name');

            data = data.filter((elem, index) => {
                return index !== i
            })

            data = writeData(data, 'name');
            
            res.json(data);
        });

    }
}