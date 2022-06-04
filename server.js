const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const eldenRingMainBosses = {
    'godrick the grafted': {
        'location': 'Stormveil Castle',
        'health': 6080,
        'runes': 20000,
        'drops': ["Godrick's Great Rune",'Remembrance of the Grafted']
    },

    'unknown': {
        'location': 'lands between',
        'health': 0,
        'runes': 0,
        'drops': 'unknown'
    }, 
    
    'rennala, queen of the full moon': {
        'location': 'Raya Lucaria Academy',
        'health': ["phase one: 3493", "phase one: 4097"],
        'runes': 40000,
        'drops': ["Remembrance of the Full Moon Queen",'Great Rune of the Unborn']
    }, 
    
    'starscourge radahn': {
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    }, 
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const bossName = request.params.name.toLowerCase()
    if (eldenRingMainBosses[bossName]) {
        response.json(eldenRingMainBosses[bossName])
    } else {
        response.json(eldenRingMainBosses['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`I'm at port${PORT}`)
})