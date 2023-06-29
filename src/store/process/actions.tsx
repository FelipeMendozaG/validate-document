export const UPDATE_PROCESS_ACTION="UPDATE_PROCESS_ACTION";
export const update_menu_state = (value:boolean)=>{
    return {
        type:UPDATE_PROCESS_ACTION,
        state:value
    }
}