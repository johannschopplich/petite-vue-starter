import "./style.css";
import { createApp } from "petite-vue";

const initialData = {
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
};

createApp(initialData).mount("#app");
