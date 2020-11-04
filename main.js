const express = require('express')
const handlebars = require('express-handlebars')
const PORT = parseInt(process.argv[2])||parseInt(process.env.PORT)||3000

const app = express()

app.engine('hbs', handlebars({defaultLayout: 'default.hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const cart =[]

app.get('/',
(req, resp)=>{
    
    resp.status(200)
    resp.type('text/html')
    resp.render('index')
})


app.post('/',

(req,resp)=>{
console.info('Your Cart Item: ', req.body)
cart.push(req.body)
resp.status(200)
resp.type('text/html')
resp.render('index', {cart})
            })

app.use(express.static(__dirname + '/Static'))
app.use(express.static(__dirname + '/views'))  

app.listen(PORT,()=>{
    console.info(`Application started at ${PORT} at ${new Date()}`)
})