<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const propsType = {
  msg: {
    type: String,
    required: true,
  },
} as const;

export default defineComponent({
  name: "HelloWorld",
  props: propsType,
  mounted() {
    this.msg;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
