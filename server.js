const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/boss/:name', (request, response) => {
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



const eldenRingMainBosses = {
    'godrick': {
        'full name': 'Godrick the Grafted',
        'location': 'Stormveil Castle',
        'health': 6080,
        'runes': 20000,
        'drops': ["Godrick's Great Rune",'Remembrance of the Grafted']
    },

    'unknown' : {
        'full name': 'unknown',
        'location': 'lands between',
        'health': 0,
        'runes': 0,
        'drops': 'unknown'
    }, 
    
    'rennala': {
        'full name': 'Rennala, Queen of the Full Moon',
        'location': 'Raya Lucaria Academy',
        'health': ["phase one: 3493", "phase one: 4097"],
        'runes': 40000,
        'drops': ["Remembrance of the Full Moon Queen",'Great Rune of the Unborn']
    }, 
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'morgott': {
        'full name': 'Morgott, The Omen King',
        'location': 'Leyndell, Royal Capital',
        'health':  10399,
        'runes': 90000,
        'drops': ["Remembrance of the Omen King","Morgott's Great Rune"]
    },  
    
    'rykard': {
        'full name': 'Rykard, Lord of Blasphemy',
        'location': 'Volcano Manor',
        'health':  59174,
        'runes': 130000,
        'drops': ["Remembrance of the Blasphemous","Rykard's Great Rune"]
    },  
    
    'mohg': {
        'full name': 'Mohg, Lord of Blood',
        'location': 'Mohgwyn Palace',
        'health':  18389,
        'runes': 420000,
        'drops': ["Remembrance of the Blood Lord","Mohg's Great Rune"]
    },  
    
    'malenia': {
        'full name': 'Malenia, Blade of Miquella',
        'location': 'Elphael, Brace of the Haligtree',
        'health':  33251,
        'runes': 480000,
        'drops': ["Remembrance of the Rot Goddess","Malenia's Great Rune"]
    },  
    
    'fortissax': {
        'full name': 'Lichdragon Fortissax',
        'location': 'Deeproot Depths',
        'health':  12903,
        'runes': 90000,
        'drops': "Remembrance of the Lichdragon"
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'radahn': {
        'full name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health':  9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    }, 
    
}