const express = require('express')
const config = require('./config/config')
const HMR = require('./config/hmr')
const compiler = require('./config/compiler')

const watching = compiler() //Compile Webpack

const app = express()

HMR.config({ app })

app.use(express.static('public'))
app.use('/build', express.static('build'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(config.PORT, function () {
  console.log(
    `App has initiated, after the build, go to localhost:${config.PORT}.`,
  )
})
