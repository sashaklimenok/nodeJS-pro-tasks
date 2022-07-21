export interface IProducer<T> {
  subscribe(observer: IObserver<T>): void;
  unSubscribe(observer: IObserver<T>): void;
  notify(): void;
}

export interface IObserver<T> {
  update(state: T): void;
}
