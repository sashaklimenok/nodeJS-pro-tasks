import { Timer } from "./Timer/Timer";
import { TimerObserver } from "./TimerObserver/TimerObserver";

export class App {
  timer: Timer;
  timerObserver: TimerObserver;

  constructor(timer: Timer, timerObserver: TimerObserver) {
    this.timer = timer;
    this.timerObserver = timerObserver;
  }

  sendMessage() {}

  init() {
    this.timer.subscribe(this.timerObserver);
    this.timer.setAlarm(5000);
  }
}
