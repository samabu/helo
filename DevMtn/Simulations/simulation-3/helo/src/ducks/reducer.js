const UPDATE_INFO = "UPDATE_INFO"

var initialState = {
    username: '',
    id: 0,
    profile_pic: 'https://robohash.org/YOUR-TEXT.png',
}

export function updateInfo(id, username) {
    return {
        type: UPDATE_INFO,
        payload: {
            id,
            username
        }
    }
}

export default function reducer(state = initialState, action) {
    console.log(action);
    
    switch(action.type) {
        case UPDATE_INFO:
            return Object.assign( {}, state, {username: action.payload.username, id: action.payload.id, profile_pic: `https://robohash.org/${action.payload.username}.png` } );
        default:
            return state;
    }
}