const typing = {
  bug: {
      goAtt: ['fire', 'flying', 'rock'],
      goDef: ['fairy', 'fighting', 'fire', 'flying', 'ghost', 'poison', 'steel'],
      returnDef: ['dark', 'grass', 'psychic'],
      returnAtt: ['fighting', 'grass', 'ground']
  },
  dark: {
      goAtt: ['bug', 'fairy', 'fighting'],
      goDef: ['dark', 'fairy', 'fighting'],
      returnDef: ['ghost', 'psychic'],
      returnAtt: ['dark', 'ghost', 'psychic']
  },
  dragon: {
      goAtt: ['dragon', 'fairy', 'ice'],
      goDef: ['fairy', 'steel'],
      returnDef: ['dragon', 'fighting', 'dark'],
      returnAtt: ['electric', 'fire', 'grass', 'water']
  },
  electric: {
      goAtt: ['ground'],
      goDef: ['dragon', 'electric', 'grass', 'ground'],
      returnDef: ['flying', 'water'],
      returnAtt: ['electric', 'flying', 'steel']
  },
}