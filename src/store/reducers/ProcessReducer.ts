import {UPDATE_PROCESS_ACTION} from '../process/actions';

interface ProcessState {
    state: boolean;
}
interface UpdateProcessAction {
    type: typeof UPDATE_PROCESS_ACTION;
    state: boolean;
}
type Action = UpdateProcessAction;
const defaultProcessState: ProcessState = {
    state: false,
};

const process_state = ( state: ProcessState = defaultProcessState, action:Action) =>{
    switch(action.type){
        case UPDATE_PROCESS_ACTION:
            return {
                ...state,
                state: action.state,
            };
        default:
            return state;
    }
}

export default process_state;