const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Horrible server!'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
