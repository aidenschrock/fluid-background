import "./style.css";
import EventBus from "./utils/EventBus";
window.EventBus = EventBus;
import WebGL from "./modules/WebGL";

// document.querySelector("#app").innerHTML = `
//   <div>

//     <h1>Hello Vite!</h1>

//   </div>
// `;

// Canvas
const canvas = document.querySelector("canvas.webgl");

const webglMng = new WebGL({
  $wrapper: document.body,
});
