/**
 * Takes the current state value and action 
 * object describing "what happened", and returns a new state value. 
 * @param {Object} state 
 * @param {String} action 
 * @returns {Object} 
 */
export default function drawerReducer(state = { isOpen: false }, action){

  switch (action.type) {

    case "open":
      return { isOpen: true };
    case "close":
      return { isOpen: false};
    default:
      return state

  }

}
