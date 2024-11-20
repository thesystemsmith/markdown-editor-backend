const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const {marked} = require('marked');

const app = express()

app.use(cors())
app.use(bodyParser.json())

// POST endpoint for Markdown to HTML conversion
app.post('/convert', (req, res) => {
    const {markdown} = req.body
    if(!markdown){
        return res.status(400).send({
            error: 'markdown input is required'
        })
    }

    const html = marked(markdown)
    res.send({html})
})

const PORT = 5001

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});