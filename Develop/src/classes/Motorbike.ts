// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class DONE
class Motorbike extends Vehicle{
  // TODO: Declare properties of the Motorbike class DONE
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels DONE
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]) DONE
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // TODO: Create a constructor that accepts the properties of the Motorbike class DONE
    // TODO: The constructor should call the constructor of the parent class, Vehicle DONE
    // TODO: The constructor should initialize the properties of the Motorbike class DONE
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not DONE
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
    ){
      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      if (wheels.length !== 2) {
        this.wheels = [new Wheel(), new Wheel()];
      } else {
        this.wheels = wheels;
      }
    }
  // TODO: Implement the wheelie method DONE
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!" DONE
wheelie(): void {
  console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
}
  // TODO: Override the printDetails method from the Vehicle class DONE
  // TODO: The method should call the printDetails method of the parent class DONE
  // TODO: The method should log the details of the Motorbike DONE
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels DONE
  override printDetails(): void {
    console.log(`VIN: ${this.vin}\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nWeight: ${this.weight}\nTop Speed: ${this.topSpeed}\nColor: ${this.color}\n Wheels: ${this.wheels}`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
