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
  fairy: {
      goAtt: ['poison', 'steel'],
      goDef: ['dark', 'fairy', 'fighting'],
      returnDef: ['ghost', 'psychic'],
      returnAtt: ['dark', 'ghost', 'psychic']
  },
  fighting: {
      goAtt: ['fairy', 'flying', 'psychic'],
      goDef: ['bug', 'ghost', 'fairy', 'flying', 'psychic', 'poison'],
      returnDef: ['dark', 'ice', 'normal', 'rock', 'steel'],
      returnAtt: ['bug', 'dark', 'rock']
  },
  fire: {
      goAtt: ['ground','rock', 'water'],
      goDef: ['dragon', 'fire', 'rock', 'water'],
      returnDef: ['bug', 'grass', 'ice', 'steel'],
      returnAtt: ['bug', 'grass', 'fire', 'ice', 'steel']
  },
  flying: {
      goAtt: ['electric', 'ice', 'rock'],
      goDef: ['electric', 'rock', 'steel'],
      returnDef: ['bug', 'fighting', 'grass'],
      returnAtt: ['bug', 'fighting', 'grass', 'ground']
  },
  ghost: {
      goAtt: ['dark', 'ghost'],
      goDef: ['dark', 'normal'],
      returnDef: ['ghost', 'psychic'],
      returnAtt: ['bug', 'fighting', 'normal', 'poison']
  },
  grass: {
      goAtt: ['bug', 'fire', 'flying', 'ice', 'poison'],
      goDef: ['bug', 'dragon', 'fire', 'flying', 'grass', 'poison','steel'],
      returnDef: ['ground', 'rock', 'water'],
      returnAtt: ['electric', 'grass', 'ground', 'water']
  },
  ground: {
      goAtt: ['grass', 'ice', 'water'],
      goDef: ['bug', 'flying', 'grass'],
      returnDef: ['electric', 'grass', 'poison', 'rock', 'steel'],
      returnAtt: ['electric', 'poison', 'rock']
  },
  ice: {
      goAtt: ['fighting', 'fire', 'rock', 'steel'],
      goDef: ['fire', 'ice', 'fire', 'water'],
      returnDef: ['dragon', 'flying', 'grass', 'ground'],
      returnAtt: ['ice']
  },
  ice: {
      goAtt: ['fighting'],
      goDef: ['ghost', 'rock', 'steel'],
      returnDef: [],
      returnAtt: ['ghost']
  },
  poison: {
      goAtt: ['ground', 'psychic'],
      goDef: ['ghost', 'ground', 'poison', 'rock', 'steel'],
      returnDef: ['grass', 'fairy'],
      returnAtt: ['grass', 'fairy', 'fighting', 'poison']
  },
  psychic: {
      goAtt: ['bug', 'dark', 'ghost'],
      goDef: ['dark', 'psychic', 'dark'],
      returnDef: ['fighting', 'poison'],
      returnAtt: ['fighting', 'fighting']
  },
  rock: {
      goAtt: ['fighting', 'grass', 'ground', 'steel', 'water'],
      goDef: ['fighting', 'ground', 'steel'],
      returnDef: ['bug', 'fire', 'flying', 'ice'],
      returnAtt: ['fire', 'flying', 'normal', 'poison']
  },
  steel: {
      goAtt: ['fighting', 'ground', 'fire'],
      goDef: ['electric', 'fire', 'steel', 'water'],
      returnDef: ['ice', 'fairy', 'rock'],
      returnAtt: ['bug', 'dragon', 'fairy', 'flying', 'grass', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel']
  },
  water: {
      goAtt: ['electric', 'grass'],
      goDef: ['dragon', 'grass', 'water'],
      returnDef: ['fire', 'ground', 'rock'],
      returnAtt: ['fire', 'ice', 'steel', 'water']
  }
}




const typesArr = Object.keys(typing);
const btnContainer = document.querySelector('.btnContainer')


//Methods

//BtnPrint
for(let i=0;i<typesArr.length;i++) {
  let btn = document.createElement('button');
  btn.dataset.type = typesArr[i];
  btn.innerHTML = `<img src="img/${typesArr[i]}.png">`;
  btnContainer.appendChild(btn);
}


//Events

let buttonsSelected = [];
const buttons = document.querySelectorAll('button');







buttons.forEach(item => {

  item.addEventListener('click', () => {
    
    
    
    let btnType = item.dataset.type;
    const typeObj = typing[btnType];
    item.classList.toggle("disabled");


    if(buttonsSelected[0] !== btnType && buttonsSelected[1] !== btnType && buttonsSelected.length < 2) {
      buttonsSelected.push(btnType);
      
    } else if(buttonsSelected[0] === btnType) {
      buttonsSelected.shift();
    } else if(buttonsSelected[1] === btnType) {
      buttonsSelected.pop();
    }
    
    for(let action in typeObj) {
      let list = document.querySelector('#' + action + 'List');
      // console.log(action);
      list.innerHTML = '';

      for(let type of buttonsSelected) {
        let finalTypes = typing[type][action];


        finalTypes.forEach(x => {
          let listItem = document.createElement('li');
          listItem.innerHTML = `<img id="${x}Option" src="img/${x}.png">`;
          list.appendChild(listItem);
        }); 
        // console.log(finalTypes);
      }
    }      
    console.log(buttonsSelected);
    if(buttonsSelected.length === 2) {
      console.log('!!!!');
    }
  })
})
