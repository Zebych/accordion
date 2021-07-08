
type ActionType = {
    type: string
}
export const TOGGLE_CONSTANS = 'TOGGLE-COLLAPSED'

 export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANS:
            return !state
        default:
            throw new Error('Bad action type')
    }
    return state
}