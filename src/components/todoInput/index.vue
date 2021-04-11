<template>
  <div>
    <div>todoInput</div>
    <input type="text" v-model="inputValve" @keydown="clickKeyAction" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodo } from "../../hooks/index";

export default defineComponent({
  name: "todoInput",
  setup() {
    const { setTodo } = useTodo();
    const inputValve = ref("777");
    const clickKeyAction = (e: KeyboardEvent): void => {
      console.log(e);

      if (e.key === "Enter" && inputValve.value.trim().length) {
        console.log(99999999);

        //设置state
        setTodo(inputValve.value);

        inputValve.value = "";
      }
    };

    return {
      inputValve,
      clickKeyAction,
    };
  },
});
</script>

<style>
</style>