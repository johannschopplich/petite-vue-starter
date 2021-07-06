import "./style.css";
// @ts-ignore: No types yet available
import { createApp } from "petite-vue";

createApp({
  // exposed to all expressions
  count: 0,
  // getters
  get plusOne() {
    return this.count + 1;
  },
  // methods
  increment() {
    this.count++;
  },
}).mount();
