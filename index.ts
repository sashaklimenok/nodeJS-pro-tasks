import EventEmitter from "events";
import { App } from "./step-3/app";

const app = new App(new EventEmitter());

app.run();
