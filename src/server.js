const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//habilitar o req.body para a aplicação
server.use(express.urlencoded({ extended: true }))

//configurar pastas como publicas
server.use(express.static("public-front-end"))
server.use(express.static("src"))
//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,  //o servidor que estamos usando
    noCache: true  //para renoar mais rapidamente a memória do servidor

})

//configurar caminhos da minha aplicação
//req:requisição,res:resposta
server.get("/", function (req, res) {
    return res.render('index_aula2.html')
})
server.get("/create-point", function (req, res) {
    //pegar os dados enviados pelo usuario através do formulario usando req.query
    //req.query()



    return res.render('create-point.html')
})
//o POST para o server torna os dados mais ocultos dentro do servidor
server.post("/save-point", function (req, res) {

    //req.body reflete o corpo do nosso formulario
    //console.log(req.body)

    //inserir dados no banco de dados
    const query = `
    INSERT INTO places (
        name,
        image,
        site,
        address,
        address2,
        state,
        city,
        about

    
    ) VALUES (?,?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.site,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.about
    ]

    function afterinsertData(err) {
        if (err) {
            console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterinsertData)//essa ultima é uma função callback,que será realizada ao final do input dos valores do programa


})


server.get("/search-results", function (req, res) {
    const search = req.query.search

    if (search == "") {
        //pesquisa de pontos cadastrados vazia
        return res.render("search-results.html", { total: 0 })
    }


    //pegar os dados do banco de dados
    //Usando esse like do sql,a busca em city pelo nome das cidades é aproximada ao que foi escrito e não necessita que o usuário escreva o nome especificamente
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {//caso eu quisesse só um campo especifico era só botar o nome do campo dps do SELECT e tirar o*
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        console.log("Aqui estão seus registros")
        console.log(rows)
        //mostrar na pagina html o banco de dados
        return res.render('search-results.html', { places: rows, total: total })
    })
})

/*server.get("/search-relatos", function (req, res) {
    const search = req.query.search

    if (search == "") {
        //pesquisa de pontos cadastrados vazia
        return res.render("search-relatos.html", { total: 0 })
    }


    //pegar os dados do banco de dados
    //Usando esse like do sql,a busca em city pelo nome das cidades é aproximada ao que foi escrito e não necessita que o usuário escreva o nome especificamente
    db.all(`SELECT * FROM places WHERE name LIKE '%${search}%'`, function (err, rows) {//caso eu quisesse só um campo especifico era só botar o nome do campo dps do SELECT e tirar o*
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        console.log("Aqui estão seus registros")
        console.log(rows)
        //mostrar na pagina html o banco de dados
        return res.render('search-relatos.html', { places: rows, total: total })
    })
})*/

//ligar o servidor
server.listen(3000)