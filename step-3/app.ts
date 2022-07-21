import EventEmitter from "events";
import { Calculator } from "./calculator/Calculator";

export class App {
  eventEmitter: EventEmitter;
  calc: Calculator;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
    this.calc = new Calculator(eventEmitter);
  }

  multiplyListener(sum: number) {
    console.log(`Form listener ${sum}`);
  }

  divideListener(sum: number) {
    console.log(`Form listener ${sum}`);
  }

  plusListener(sum: number) {
    console.log(`Form listener ${sum}`);
  }

  minusListener(sum: number) {
    console.log(`Form listener ${sum}`);
  }

  initListeners() {
    this.eventEmitter.addListener("multiply", this.multiplyListener);
    this.eventEmitter.addListener("divide", this.divideListener);
    this.eventEmitter.addListener("plus", this.plusListener);
    this.eventEmitter.addListener("minus", this.minusListener);
  }

  run() {
    this.initListeners();
    this.calc.divide(10, 5);
    this.calc.multiply(10, 5);
    this.calc.plus(10, 5);
    this.calc.minus(10, 5);
  }
}
