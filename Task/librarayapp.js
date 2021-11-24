//Media
class Media {
    constructor(title){
      this._title = title;
      this._ratings = [];
      this._isCheckedOut = false;
    }
  
    get title() {
      return this._title;
    }
    get ratings(){     
      return this._ratings;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    set isCheckedOut(value){
      this._isCheckedOut=value;
    }
  
    toggleCheckOutStatus() {
      /*if (this.isCheckedOut === true) {
        this.isCheckedOut = false;
      } else {
        this.isCheckedOut = true;
      }*/
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    addRating(rating){
      this.ratings.push(rating);
    }
  
    getAverageRating() {
      const arrayLength = this.ratings.length;
      const ratingSum = this.ratings.reduce((x,y) => x+y);
      const ratingAverage = ratingSum / arrayLength;
      return ratingAverage;
    }
    
  }
  
  class Book extends Media {
      constructor(title,author,pages){
        super(title)
        this._author = author;
        this._pages = pages;
      }
      get author() {
        return this._author;
      }
      get pages() {
        return this._pages;
      }
  }
  
  class Movie extends Media{
    constructor(title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
    
  }
  
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);