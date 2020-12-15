export default function reducer(state, action) {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				userData: action.payload,
			};
		case 'GET_POSTS':
			return {
				...state,
				postData: action.payload,
			};
		default:
			return state;
	}
}
