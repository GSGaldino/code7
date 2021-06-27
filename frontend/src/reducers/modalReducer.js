/**
 * Takes the current state value and action object
 * describing "what happened", and returns a new state value. 
 * @param {Object} state 
 * @param {String} action 
 * @returns {Object} 
 */
export default function modalReducer(state = { isOpen: false, isNewDebt: false }, action){

  switch (action.type) {

    case "open":
      return { isOpen: true, data: action.data, isNewDebt: action.isNewDebt || false };
    case "close":
      return { isOpen: false, data: action.data, isNewDebt: action.isNewDebt || false};
    default:
      return state

  };

};
