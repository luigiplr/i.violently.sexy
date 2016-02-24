import express from 'express'
import busboy from 'connect-busboy'
import _ from 'lodash'
import imgur from 'imgur'
import url from 'url'

const router = express.Router()

router.post('/upload', busboy(), (req, res) => {
    let base64data = []

    req.busboy.on('file', (fieldname, file) => {
        let buffer = ''
        file.setEncoding('base64')
        file.on('data', data => buffer += data).on('end', () => base64data.push(buffer))
    }).on('finish', () => base64data.forEach(base64 => imgur.uploadBase64(base64)
        .then(json => {
            const imgurLink = json.data.link
            res.send(`http://i.v.sexy${url.parse(imgurLink).path}`)
        }).catch(err => {
            console.error(err.message)
        })))


    req.pipe(req.busboy)
})


export default router