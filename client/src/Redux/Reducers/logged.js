export const logged=(state={isLogged:false,username:''},action)=>{
    switch (action.type)
    {
        case 'LOGGEDIN':
            return {isLogged:!state.isLogged,username:action.payload}
        default:
            return state
    }
}