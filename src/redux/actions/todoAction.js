import { TOGGLE_TODO } from './Constants';

export const toggleTodo = ({date, taskIndex}) => {
    
    return {
        type: TOGGLE_TODO,
        date,
        taskIndex
    }
}