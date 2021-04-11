<template>
  <div>
    <input type="checkbox" name="" id="" @click="setStatus(item.id)" />
    <span :class="item.status === FINISH ? 'done' : ''">{{
      item.content
    }}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button @click="setDoing(item.id)" v-if="item.status !== FINISH">
      {{ item.status === DOING ? "正在做" : "去做" }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useTodo } from "../../hooks";
import { ITodo, TODO_STASUS } from "../../typings";
export default defineComponent({
  name: "todoItem",

  props: {
    item: Object as PropType<ITodo>,
  },

  setup(props, { emit }) {
    const { removeTodo, setStatus, setDoing } = useTodo();
    return {
      ...TODO_STASUS,
      removeTodo,
      setStatus,
      setDoing,
    };
  },
});
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>