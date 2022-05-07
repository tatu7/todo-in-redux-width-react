export const addCardAction = (card) => {
  return {
    type: "ADDCARD",
    payload: card,
  };
};
export const deleteCardAction = (data) => {
  return {
    type: "DELETECARD",
    payload: data,
  };
};
