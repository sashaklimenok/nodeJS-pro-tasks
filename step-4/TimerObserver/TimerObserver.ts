import { IObserver, IProducer } from "../Producer/types";
import { TimerState } from "../Timer/Timer";

export class TimerObserver implements IObserver<TimerState> {
  update(state: TimerState): void {
    console.log(state);
  }
}
