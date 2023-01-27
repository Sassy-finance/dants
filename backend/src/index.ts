import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import pkg from '../package.json'
import compression from 'compression'
import config from './config'
import db from './models'

import AirbyteRouter from './routes/AirbyteRouter'

const app = express()

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    )
    next()
})
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())

app.get('/', (_, res) => {
    res.send(
        `<strong><code>v${pkg.version}<br />
      </code></strong>`
    )
})

app.use('/api/v1/airbyte', AirbyteRouter)


app.use((_, res) => {
    res.status(404).send()
})

db.sequelize.authenticate().then(
    app.listen(config.app.port, () => {
      console.log(`Sever listening`)
    })
  ).catch(err => console.log(`Error connecting with the db ${err}`))
