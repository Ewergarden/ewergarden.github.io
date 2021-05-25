const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    messagesData : [
        {id: 1, message: 'Hi Pdis'},
        {id: 2, message: 'Yoptope'},
        {id: 1, message: 'What up?'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
        {id: 2, message: 'Вовка Путин'},
        {id: 1, message: 'Вовка Путин'},
    ],
    dialogsDt: [
        {id: 1, name: 'Hender'},
        {id: 2, name: 'Yoptope'},
        {id: 3, name: 'What up?'},
        {id: 4, name: 'Вовка Путин'},
        {id: 5, name: 'Вовка Путин'}
    ]
};

const dialogsReducer = (state = initialState,action) => {

     switch (action.type) {
         case SEND_MESSAGE:
             const body = action.newMassageBody;
             return {
                 ...state,
                 messagesData : [...state.messagesData, {id: 2, message: body}]
             };
         default :
             return state;
     }
}

export const sendMessageCreator = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody})


export default dialogsReducer;