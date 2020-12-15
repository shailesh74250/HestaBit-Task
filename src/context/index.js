import React from 'react';

const Context = React.createContext({
	postData: {
		data: [],
	},
	userData: {
		data: [],
	},
});

export default Context;
