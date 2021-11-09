import { createApp, defineComponent, createVNode } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const img = require("./assets/logo.png");
import App from "./App.vue";

// const App = defineComponent({
//   render() {
//     return createVNode("div", { id: "app" }, [
//       createVNode("img", {
//         alt: "Vue logo",
//         src: img,
//       }),
//       createVNode(HelloWorld, {
//         msg: "Welcome to Your Vue.js + TypeScript App",
//       }),
//     ]);
//   },
// });

createApp(App).mount("#app");
