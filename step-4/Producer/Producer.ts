import { IObserver, IProducer } from "./types";

export abstract class Producer<T> implements IProducer<T> {
  private observers: IObserver<T>[] = [];
  abstract state: T

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unSubscribe(observer: IObserver<T>): void {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this.state);
    });
  }
}
