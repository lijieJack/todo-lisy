enum TODO_STASUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISH = 'finish'
}

interface ITodo {
    id: number,
    content: string,
    status: TODO_STASUS
}

interface IState {
    list: ITodo[]
}

export {
    ITodo,
    IState,
    TODO_STASUS
}