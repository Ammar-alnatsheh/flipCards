class Cards {

    constructor() {
        this.Cards = [
            { value: 1,
              imgae :'one'
            },
            { value: 1,
              imgae :'one'
            },
            { value: 2,
              image: 'two'
            },
            { value: 2,
              image: 'two'
            },
            { value: 3,
              image: 'three'
            },
            { value: 3,
              image: 'three'
            },
            { value: 4,
              image: 'four'
            },
            { value: 4,
              image: 'four'
            },
            { value: 5,
              image: 'five'
            },
            { value: 5,
              image: 'five'
            },
            { value: 6,
              image: 'six'
            },
            { value: 6,
              image: 'six'
            },
            { value: 7,
              image: 'seven'
            },
            { value: 7,
              image: 'seven'
            },
            { value: 8,
              image: 'eight'
            },
            { value: 8,
              image: 'eight'
            },
        ];
    }

    getCards () {
        return this.shuffle(this.Cards);
    }

    shuffle (array) {
        var dupArray = array.slice();
        var shuffled = [];
        while(dupArray.length !== 0){
          var idx = Math.floor(Math.random()*dupArray.length);
          shuffled.push(dupArray[idx]);
          dupArray[idx] = dupArray[dupArray.length-1];
          dupArray.pop();
        }
        return shuffled;
      }
}

export default Cards;