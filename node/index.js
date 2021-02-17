const express = require('express');
const app = express();
const connection = require('./database')

const port = 3000;


app.get('/', (req,res) => {    
    const name  = req.query.name || 'Rodrigo'

    

    connection.query(`INSERT INTO people(name) VALUES('${name}')`, function (error, results, fields) {
        if (error) console.error(error);
        connection.query(`SELECT * FROM people`, function(error, results, fields){
            if (error) console.error(error);
            console.log(results)
            var result = '<h1>Full Cycle Rocks!</h1><br />';
            result += '<table border="1"><thead>';
            result += '<tr><td colspan="2">Nomes cadastrada no banco de dados</td></tr>';
            result += '</thead><tbody>';
            result += '<tr><th>ID</th><th>Nome</th></tr>';
            results.forEach( el => {
                result += "<tr><td>" + el.id + "</td><td>" + el.name + "</td></tr>";
            });
            result += '</tbody></table>';
            res.send(result)
        });
    });
    
 
    
})

app.listen(port, ()=> {
    console.log(`App rodando na porta ${port}`)
})