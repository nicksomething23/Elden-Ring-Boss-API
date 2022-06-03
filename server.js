const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': ' Illinois, U.S'
    },

    'eminem': {
        'age': 49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'Missouri, U.S'
    },

    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`I'm at port${PORT}`)
})