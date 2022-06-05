const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(eldenRingMainBosses)
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
        'full_name': 'Godrick the Grafted',
        'location': 'Stormveil Castle',
        'health': 6080,
        'runes': 20000,
        'drops': ["Godrick's Great Rune",'Remembrance of the Grafted']
    },

    'unknown' : {
        'full_name': 'unknown',
        'location': 'lands between',
        'health': 0,
        'runes': 0,
        'drops': 'unknown'
    }, 
    
    'rennala': {
        'full_name': 'Rennala, Queen of the Full Moon',
        'location': 'Raya Lucaria Academy',
        'health': ["phase one: 3493", "phase one: 4097"],
        'runes': 40000,
        'drops': ["Remembrance of the Full Moon Queen",'Great Rune of the Unborn']
    }, 
    
    'radahn': {
        'full_name': 'Starscourge Radahn',
        'location': 'Redmane Castle, Caelid',
        'health': 9572,
        'runes': 70000,
        'drops': ["Remembrance of the Starscourge","Radahn's Great Rune"]
    },  
    
    'morgott': {
        'full_name': 'Morgott, The Omen King',
        'location': 'Leyndell, Royal Capital',
        'health': 10399,
        'runes': 90000,
        'drops': ["Remembrance of the Omen King","Morgott's Great Rune"]
    },  
    
    'rykard': {
        'full_name': 'Rykard, Lord of Blasphemy',
        'location': 'Volcano Manor',
        'health': 59174,
        'runes': 130000,
        'drops': ["Remembrance of the Blasphemous","Rykard's Great Rune"]
    },  

    'mohg': {
        'full_name': 'Mohg, Lord of Blood',
        'location': 'Mohgwyn Palace',
        'health': 18389,
        'runes': 420000,
        'drops': ["Remembrance of the Blood Lord","Mohg's Great Rune"]
    },  
    
    'malenia': {
        'full_name': 'Malenia, Blade of Miquella',
        'location': 'Elphael, Brace of the Haligtree',
        'health': 33251,
        'runes': 480000,
        'drops': ["Remembrance of the Rot Goddess","Malenia's Great Rune"]
    },  
    
    'fortissax': {
        'full_name': 'Lichdragon Fortissax',
        'location': 'Deeproot Depths',
        'health': 12903,
        'runes': 90000,
        'drops': ["Remembrance of the Lichdragon", "Mending Rune of the Death-Prince"]
    },  
    
    'maliketh': {
        'full_name': ['Beast Clergyman', 'Maliketh, The Black Blade'],
        'location': ' Crumbling Farum Azula',
        'health': 10620,
        'runes': 220000,
        'drops': "Remembrance of the Black Blade"
    },  
    
    'astel': {
        'full_name': 'Astel, Naturalborn of the Void',
        'location': 'Grand Cloister, Lake of Rot',
        'health': 11170,
        'runes': 80000,
        'drops': "Remembrance of the Naturalborn"
    },  
    
    'regal ancestor spirit': {
        'full_name': 'Regal Ancestor Spirit',
        'location': 'Nokron, Eternal City',
        'health': 6301,
        'runes': 24000,
        'drops': "Remembrance of the Regal Ancestor",
    },  
    
    'radagon': {
        'full_name': 'Radagon of the Golden Order',
        'location': 'Stone Platform at Elden Throne, Leyndell',
        'health': 9572,
        'runes': 'N/A',
        'drops': 'N/A'
    },  
    
    'elden beast': {
        'full_name': 'Elden Beast',
        'location': 'Stone Platform at Elden Throne, Leyndell',
        'health': 22127,
        'runes': 500000,
        'drops': "Elden Remembrance"
    },  
    
    'fire giant': {
        'full_name': 'Fire Giant',
        'location': 'Flame Peak, Mountaintops of the Giants',
        'health': 43263,
        'runes': 135000,
        'drops': "Remembrance of the Fire Giant"
    },  
    
    'godfrey': {
        'full_name': 'Godfrey, First Elden Lord',
        'location': 'Leyndell, Capital of Ash',
        'health': 21903,
        'runes': 300000,
        'drops': "Remembrance of Hoarah Loux"
    },  
    
    'placidusax': {
        'full_name': 'Dragonlord Placidusax',
        'location': 'Crumbling Farum Azula',
        'health': 26651,
        'runes': 280000,
        'drops': "Remembrance of the Dragonlord"
    },
    
    'sir gideon ofnir': {
        'full_name': 'Sir Gideon Ofnir, The All-Knowing',
        'location': 'Leyndell, Capital of Ash',
        'health': 6226,
        'runes': 150000,
        'drops': ["All-Knowing Helm","All-Knowing Armor","All-Knowing Gauntlets","All-Knowing Greaves","Scepter of the All-Knowing"]
    },  
    
    'godskin duo': {
        'full_name': 'Godskin Duo',
        'location': 'Crumbling Farum Azula',
        'health': 26350,
        'runes': 170000,
        'drops': ["Smithing-Stone Miner's Bell Bearing [4]", 'Ash of War: Black Flame Tornado']
    }, 
    
    'golden shade godfrey' : {
        'full_name': 'Godfrey, First Elden Lord (Golden Shade)',
        'location': 'Leyndell, Royal Capital',
        'health': 7099,
        'runes': 80000,
        'drops': "Talisman Pouch"
    }, 
    
}