import { IState, ITodo } from '@/typings'
import { Commit } from 'vuex'
import { REMOVE_TODOLIST, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from './actionTypes'
interface ICtx {
    commit: Commit,
    state: IState
}
export default {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo)
    },

    [SET_TODOLIST]({ commit }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODOLIST, todoList)
    },
    [REMOVE_TODOLIST]({ commit }: ICtx, id: number): void {
        commit(REMOVE_TODOLIST, id)
    },
    [SET_STATUS]({ commit }: ICtx, id: number): void {
        commit(SET_STATUS, id)
    },
    [SET_DOING]({ commit }: ICtx, id: number): void {
        commit(SET_DOING, id)
    }
}