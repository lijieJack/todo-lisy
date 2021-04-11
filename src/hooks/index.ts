import { REMOVE_TODOLIST, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from '@/store/actionTypes';
import { ITodo, TODO_STASUS } from '@/typings';
import { Store, useStore } from 'vuex'
import { watch } from 'vue'
let hasWatchedList: boolean = false

interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void
}

interface IUseLocalStorage {
    getLocalstorage: () => ITodo[];
    setLocalStorage: (list: ITodo[]) => void;
}

function useTodo(): IUseTodo {



    console.log('useStore------->', useStore);
    //下面这行store获取的代码 必须在setup内执行  才有效
    const store: Store<any> = useStore();
    const { getLocalstorage, setLocalStorage }: IUseLocalStorage = useLocalStorage();

    if (!hasWatchedList) {
        hasWatchedList = true;
        watch(() => store.state.list, (todoList) => {
            console.log('setLocalStorage(todoList);', setLocalStorage(todoList));
            setLocalStorage(todoList);
        }, {
            deep: true
        });
    }

    function setTodo(value: string) {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STASUS.WILLDO

        }
        store.dispatch(SET_TODO, todo)
        // setLocalStorage(store.state.list);
    }


    function setTodoList() {
        const todoList: ITodo[] = getLocalstorage()
        store.dispatch(SET_TODOLIST, todoList)
    }

    function removeTodo(id: number) {
        console.log('removeTodo------>', id);
        store.dispatch(REMOVE_TODOLIST, id)

    }

    function setStatus(id: number) {
        console.log('setStatus------>', id);
        store.dispatch(SET_STATUS, id)
    }

    function setDoing(id: number) {
        console.log('setDoing------>', id);
        store.dispatch(SET_DOING, id)
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}


function useLocalStorage(): IUseLocalStorage {
    function getLocalstorage(): ITodo[] {
        return JSON.parse(localStorage.getItem('list') || '[]')
    }

    function setLocalStorage(list: ITodo[]): void {
        localStorage.setItem('list', JSON.stringify(list || []))
    }


    return {
        getLocalstorage,
        setLocalStorage
    }

}

export {
    useTodo
}