<template>
  <div>
    <todoItem :item="item" v-for="item in todoList" :key="item.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import todoItem from "./todoItem.vue";
import { ITodo } from "../../typings/index";
export default defineComponent({
  components: {
    todoItem,
  },

  props: {
    todoList: Array as PropType<ITodo[]>,
  },

  setup(props, { emit }) {
    return {};
  },
});
</script>

<style>
</style>