import React, { useContext, useReducer, useState, useEffect } from 'react';
import ReusableListing from './features/displayList';
import Context from './context';
import reducer from './context/reducer';
import { POST_API, USER_API } from './constants/apiUrl';
import callAPI from './services/callApi';

function App() {
	const initialState = useContext(Context);
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		callAPI(POST_API, 'GET').then((postData) => {
			dispatch({
				type: 'GET_POSTS',
				payload: postData,
			});
		});
		callAPI(USER_API, 'GET').then((userData) => {
			dispatch({
				type: 'GET_USERS',
				payload: userData,
			});
		});
	}, []);

	return (
		<>
			<Context.Provider value={{ state, dispatch }}>
				<ReusableListing />
			</Context.Provider>
		</>
	);
}

export default App;
