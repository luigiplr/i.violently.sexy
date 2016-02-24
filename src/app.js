import express from 'express'
import api from './routes/api'
import mainRoutes from './routes/main'

const app = express()

app.get('/', mainRoutes)

app.use('/api', api)

app.listen(80, () => console.log('We are cooking @ port 80!'))