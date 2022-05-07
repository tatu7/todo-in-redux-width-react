const addReducer = (history = [], newcard) => {
  if (newcard.type === "ADDCARD") {
    return (history = [...history, newcard.payload]);
  }
  return history;
};
export default addReducer;
