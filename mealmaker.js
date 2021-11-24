const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
   
  
    // getters
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts;
    },
  
    // setters
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  
  get courses(){
   return {
     appetizers: this.appetizers,
     mains: this.mains,
     desserts: this.desserts,
   }
  },
  addDishToCourse(courseName,dishName,dishPrice){
    //dish
    const dish = {
      name: dishName,
      price: dishPrice,
    }
  
    //     menu._courses[courseName].push(dish)   
    return this._courses[courseName].push(dish);//my question where is courseName come from?
  },
  getRandomDishFromCourse(courseName){
    let dishes=this._courses[courseName];
    let randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Meal: ${appetizer.name}, ${main.name}, ${dessert.name}. Cost: $${totalPrice}`;
  },
  
  };
  
  menu.addDishToCourse("appetizers",'wing', 4.00);
  menu.addDishToCourse("appetizers", 'checken', 5.00);
  menu.addDishToCourse("appetizers", 'salmon', 6.00);
  
  //main
  
  menu.addDishToCourse("mains", "soup", 10.36);
  menu.addDishToCourse("mains", "hamburger", 50.55);
  menu.addDishToCourse("mains", "teriyaki", 20.29);
  
  //dessert
  
  menu.addDishToCourse("desserts","cake",3.00);
  menu.addDishToCourse("desserts","orange",2.00);
  menu.addDishToCourse("desserts","candy",1.00);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);