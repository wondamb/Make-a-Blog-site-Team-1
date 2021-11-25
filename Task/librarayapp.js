
/* Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).

Getters: all properties have a getter

Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)

Getters: all properties have a getter

Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), ratings (array, initially empty), and songs (array of strings)

Getters: all properties have a getter

Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Steps
Start by creating the classes for Media , Book, Movie, and CD.
Now that we have made our classes let's use them.
Create a Book instance with the following properties:

Author: 'Bill Bryson'

Title: 'A Short History of Nearly Everything'

pages: 544

Save the instance to a constant variable named historyOfEverything.

Call .toggleCheckOutStatus() on the historyOfEverything instance.
Log the value saved to the isCheckedOut property in the historyOfEverything instance.
Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
Call .getAverageRating() on historyOfEverything. Log the result to the console.
Great job! Now, let's create a Movie instance with the following properties:
Director: 'Jan de Bont' Title: 'Speed' Runtime: 116 Save the instance to a constant variable named speed.

Call .toggleCheckOutStatus() on the speed instance.
Log the value saved to the isCheckedOut property in the speed instance.
Call .addRating() three times on speed with inputs of 1, 1, and 5.
Call .getAverageRating() on speed. Log the result to the console.
Bonus Round!
Create a CD class that extends Media.
In .addRating(), make sure input is between 1 and 5.
Create class called Catalog that holds all of the Media items in our library.
*/
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