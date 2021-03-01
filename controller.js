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
            let data = readData('recipes');
            res.json(data);
        });
        
        app.get('/chefs', function(req, res){
            // /home/:id -> req.params.id
            let data = readData('chefs');
            data = data.map((elem, index)=>{
                return {name: elem.name, id: index}
            });
            res.json(data);
        });

        app.get('/chef/:id', function(req, res){
            const id = req.params.id;
            let data = readData('chefs');
            data = data.filter((elem, index) => {
                return elem.id == id;
            });
            console.log(data);
            if(data.length === 0) {
                res.send(new Error('Id invalid'));
            } else {
                res.json(data[0]);
            }
        });

        app.post('/recipes', urlencodedParser, (req, res) => {
            console.log(req.body);
            const data = req.body.data
            let recipes = readData('recipes');
            const newrecipe = {label: req.body.label, image: req.body.image}
            recipes.push(newrecipe);
            writeData(recipes, 'recipes');
            res.json(recipes);
        });

        app.post('/home', urlencodedParser, (req, res) => {
            console.log(req.body);
            
            const data = req.body.data
            writeData(data, 'recipes');
            res.json(data);
        });

    }
}