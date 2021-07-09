import "./style.css";
import { createApp } from "petite-vue";

createApp({
  // Exposed to all expressions
  count: 0,

  // Getters
  get plusOne() {
    return this.count + 1;
  },

  // Methods
  increment() {
    this.count++;
  },

  mounted($el?: Node) {
    console.log("Mounted on:", $el);
  },
}).mount("#app");
