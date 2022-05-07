const deleteReducer = (history = [], obj) => {
  if (obj.type === "DELETECARD") {
    return (history = obj.payload);
  }
  return history;
};
export default deleteReducer;
