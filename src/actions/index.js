export function selectBook(book) {
  //selectBook is an ActionCreator, needs to return an action,
  // an object with a type property & payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
