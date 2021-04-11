<template>
  <div>1111事实上1111</div>
  <todoInput />
  <todoList :todoList="todoList" />
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted } from "vue";
// import { component } from "vue";
import todoInput from "./components/todoInput/index.vue";
import todoList from "./components/todoLIst/index.vue";
import { useTodo } from "./hooks/index";
import { Store, useStore } from "vuex";

export default defineComponent({
  components: {
    todoInput,
    todoList,
  },
  setup() {
    const { setTodoList } = useTodo();
    const store: Store<any> = useStore();
    onMounted(() => {
      setTodoList();
    });

    return {
      todoList: computed(() => store.state.list),
    };
  },
});
</script>

<style>
</style>
