import { App } from "./App";
import "./style.css";


//Dom
const root = document.querySelector<HTMLDivElement>('#app');

//Renderer
root!.append(App());

