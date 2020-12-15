const callAPI = (apiURL, apiMethod, contentType = 'application/json') => {
	let headers = {
		'Content-Type': contentType,
	};
	return new Promise((resolve, reject) => {
		fetch(apiURL, {
			apiMethod,
		})
			.then(function (res) {
				return res.json();
			})
			.then(function (json) {
				resolve(json);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export default callAPI;
