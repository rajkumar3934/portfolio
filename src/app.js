const path = require('path')
const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT || 3000
const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title: 'portfolio-app',
        name: 'Rajkumar'
    })
})







app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})