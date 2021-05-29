const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    messagesData : [
        {id: 1, message: 'Hi Pdis'},
        {id: 2, message: 'Yoptope'},
        {id: 1, message: 'What up?'},
        {id: 2, message: 'н'},
        {id: 1, message: 'В'},
        {id: 2, message: 'Во'},
        {id: 1, message: 'Ghbd'},
        {id: 2, message: 'В'},
        {id: 1, message: 'н'},
        {id: 2, message: 'н'},
        {id: 1, message: 'н'},
        {id: 1, message: 'Привет'},
        {id: 2, message: 'В'},
        {id: 1, message: 'н'},
        {id: 2, message: 'Лол'},
        {id: 1, message: 'В'},
    ],
    dialogsDt: [
        {id: 1, name: 'Hender'},
        {id: 2, name: 'Yoptope'},
        {id: 3, name: 'What up?'},
        {id: 4, name: 'Это пост'},
        {id: 5, name: 'Вотс апп??'}
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