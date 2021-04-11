import { IState, ITodo, TODO_STASUS } from "@/typings";
import { REMOVE_TODOLIST, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "./actionTypes";

export default {

    [SET_TODO](state: IState, todo: ITodo): void {
        state.list.unshift(todo)
        console.log('state.list', state.list);
    },

    [SET_TODOLIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
        console.log('state.list', state.list);

    },

    [REMOVE_TODOLIST](state: IState, id: number): void {
        state.list = state.list.filter((itme) => {
            if (itme.id === id) {
                return false;
            } else {
                return true
            }
        })
    },

    [SET_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STASUS.FINISH:
                        item.status = TODO_STASUS.WILLDO
                        break;
                    case TODO_STASUS.WILLDO:
                    case TODO_STASUS.DOING:
                        item.status = TODO_STASUS.FINISH
                        break;

                    default:
                        break;
                }
                return item;
            } else {
                return item
            }
        })
    },
    [SET_DOING](state: IState, id: number): void {
        state.list = state.list.map((item) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STASUS.WILLDO:
                        item.status = TODO_STASUS.DOING
                        break;
                    case TODO_STASUS.DOING:
                        item.status = TODO_STASUS.WILLDO
                        break;

                    default:
                        break;
                }
                return item;
            } else {
                return item
            }
        })
    }
}