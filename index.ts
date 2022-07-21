import { App } from "./step-4/App";
import { Timer } from "./step-4/Timer/Timer";
import { TimerObserver } from "./step-4/TimerObserver/TimerObserver";

const app = new App(new Timer(), new TimerObserver());

app.init();
