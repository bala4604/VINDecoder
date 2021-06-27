export const vinhistory=(state={arr:[]},action)=>{
    console.log(action)
    switch (action.type)
    {
        case 'AddVinHistory':
            return {
                ...state,
                arr: state.arr.concat(action)
            }
        default:
            return state
    }
}