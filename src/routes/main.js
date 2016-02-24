import express from 'express'
import url from 'url'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Nothing here yet, Soon.')
})

router.get('/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    const id = req.params.id
    const direct = id.contains('.')
    
    res.send(`${id+direct}`)

})

export default router