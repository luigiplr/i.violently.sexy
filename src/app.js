import express from 'express'
import api from './routes/api'


const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/api', api)

app.listen(80, () => console.log('We are cooking @ port 80!'))