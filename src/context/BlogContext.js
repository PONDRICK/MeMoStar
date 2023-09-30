import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "edit-memo":
            return state.map((memo) => memo.id === action.payload.id ? action.payload : memo);
        case "del-memo":
            return state.filter((memo) => memo.id != action.payload);
        case "add-memo":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                    date: action.payload.date,
                    time: action.payload.time,
                    room: action.payload.room,
                },
            ];
        
        default:
            return state;
    }
};

const addMemo = (dispatch) => {
    return (title, content, date,time,room) => {
        dispatch({ type: "add-memo", payload: { title, content, date ,time,room} });
    };
};
const delMemo = dispatch => {
    return (id) => dispatch({ type: 'del-memo', payload: id });
};
const editMemo = dispatch => {
    return (id, title, content,date,time,room) => dispatch({ type: 'edit-memo', payload: { id, title, content, date, time, room } });
};
export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo, delMemo, editMemo },
    [{ id: '00001', title: 'Mobile Application', content: 'Final exam', date: '28/10/2023', time: '13:00', room: 'SC-330' }]
);