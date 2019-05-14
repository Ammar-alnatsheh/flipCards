class Cards {

    constructor() {
        this.Cards = [];
        for ( let value = 1; value <= 10; value ++) {
          this.Cards.push({
            value : value,
          });
          this.Cards.push({
            value : value,
          });
        }
            
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