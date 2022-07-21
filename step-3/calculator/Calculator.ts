import EventEmitter from "events";

export class Calculator {
  eventEmitter: EventEmitter;

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
  }

  multiply(a: number, b: number) {
    this.eventEmitter.emit("multiply", a * b);
  }

  divide(a: number, b: number) {
    try {
      this.eventEmitter.emit("divide", a / b);
    } catch (err) {
      throw new Error("can not divide by 0");
    }
  }

  plus(a: number, b: number) {
    this.eventEmitter.emit("plus", a + b);
  }

  minus(a: number, b: number) {
    this.eventEmitter.emit("minus", a - b);
  }
}
