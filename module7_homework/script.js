'use strict';

1.
const userLapina = function(a) {
    a = {
        Имя: 'Elena',
        Фамилия: 'Lapina',
        Возраст: '30'}
    for ( let key in a) {
        console.log(key+ ':' + a[key]);
    }   
 
   
}
 userLapina();
  // "Имя: Elena"
     " Фамилия: Lapina"
     " Возраст : 30"

 2.
 function snowProps(obj, objKeyName) {
    return ( objKeyName in obj);
 } 
  const student  =  {
    name: "Gulnaz",
    owncity: "Ufa",
    course: " Frontend SkillFactopy"
  };

  console.log(snowProps(student, "same")); // false
  console.log(snowProps(student, "name")); // true

  3. 
  function createObject () {
    return Object.create(null);
  }

  const obj = createObject();
  console.log(obj);
  console.log(Object.getPrototypeOf(obj));

  4.
  function Lighting (name, manufacturer,power, led){
    this.name = name,
    this.led = function(){ console.log(`The ${this.name} is  ${led}.`)}
    this.power = function(){ console.log(`Electricity consumption of the ${this.name} is ${power} W.`)}
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.`)}
      console.log(`The ${name} is manufacturied by ${manufacturer}.`)  
  } 
  
  const lamp = new Lighting('lamp', 'Samsung'); 
  const power = new Lighting ('lamp','', 100);
  const led = new Lighting ('lamp','','','Led' );
  power.power();
  lamp.manufacturer();
  led.led();

  function PC (name, manufacturer, display, power){
    this.name= name, 
    this.display = display,
    this.power = power,
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}.
    Display is &{this.display}. Power is ${this.power} W.`)}
      
  }

  const comp = new PC('computer','IBM',18,280)

  comp.manufacturer();

  