// updates state with new user input data on bookEditing view
const updateReducer = (state = [], action) => {
    console.log('IN updateReducer, and action.payload is:', action.payload);
    const bookUpdates = action.payload;
    if (action.type === 'SET_UPDATE') {
        return {
            ...state,
            subtitle: bookUpdates.subtitle,
            publisher: bookUpdates.publisher,
            published: bookUpdates.published,
            genre: bookUpdates.genre,
            pages: bookUpdates.pages,
            description: bookUpdates.description,
            read: bookUpdates.read,
            rating: bookUpdates.rating,
            review: bookUpdates.review,
            borrowed: bookUpdates.borrowed,
            borrowedDate: bookUpdates.borrowedDate,
            borrower: bookUpdates.borrower,
        }
    }
    return state;
}

export default updateReducer;