import "./style.css";
// @ts-expect-error: No types available yet
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

  mounted() {
    console.log("I'm mounted!");
  },
}).mount();
