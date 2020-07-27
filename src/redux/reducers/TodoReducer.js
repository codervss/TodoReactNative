import { TOGGLE_TODO } from '../actions/Constants';
import { rawData } from '../../globals';

const INITIAL_STATE = {data : rawData}

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TOGGLE_TODO:
        
            const newData = state.data.map((item, index) =>{
                
                if(item.date === action.date){
                    return Object.assign({}, item,{ task : item.task.map((taskData, ind) =>{
                        if(ind === action.taskIndex){
                            return Object.assign({},taskData,{ completed : !taskData.completed})
                        }
                        else return taskData
                    }) }) 
                }
                else return item
            })

            return Object.assign({}, state,{data : newData})

        default:
            return state;
    }
}