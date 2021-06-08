const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            getFetch: () => {
                fetch(""
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                    .then(data => setStore({contacts: data}))
                    .catch(error => console.log("There was an error:" + error));
            }
            postFetch: contact => {
                fetch("")



                .then(response => {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                    .then(data => setStore({contacts: data}))
                    .catch(error => console.log("There was an error:" + error));
            }
            }

            deleteFetch: id => {
                fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
                    method: "DELETE",
                    body: JSON.stringify,
                    headers: {
                        "Content-Type": "application/json"
                    }
                    .then(response => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => getActions().getFetch())
                    .catch(error => console.log("There was an error"));
                })
            }
		}
	};
};

export default getState;
