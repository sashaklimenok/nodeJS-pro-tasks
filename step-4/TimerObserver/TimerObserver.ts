import { IObserver, IProducer } from "../Producer/types";
import { TimerState } from "../Timer/Timer";
import notifier from "node-notifier";
import path from "path";

console.log(path.join(__dirname, 'logo.png'))

export class TimerObserver implements IObserver<TimerState> {
  update(state: TimerState): void {
    notifier.notify({
      title: 'Hello',
      message: 'message',
      sound: true,
    });
  }
}
