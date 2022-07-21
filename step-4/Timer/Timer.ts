import { Producer } from "../Producer/Producer";

export interface TimerState {
  message: string;
}

export class Timer extends Producer<TimerState> {
  state = {
    message: "",
  };

  setAlarm(ms: number) {
    setTimeout(() => {
      this.state.message = "Alllllaaaaaarrrrmmmmm!!!!";
      this.notify();
    }, ms);
  }
}
