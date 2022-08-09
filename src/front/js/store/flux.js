const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			token : null
		},

		actions: {

		syncTokenFromSession: () => {
			const token = sessionStorage.getItem("token");
			if (token && token != "" && token != undefined)
				setStore({ token: token });
		 },

		
		login: async (email, password, history) => {
			try {
			  const opts = await fetch(process.env.BACKEND_URL + "/api/token", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			  });
	
			  // const resp = await fetch('https://3001-4geeksacade-reactflaskh-setqz2nrkzy.ws-us45.gitpod.io/api/token')
			  if (opts.ok) {
				const data = await opts.json();
				console.log("this came from backend", opts);
				sessionStorage.setItem("token", JSON.stringify(data));
				getActions().getUser(email);
				history.push("/home");
				// setStore({ token: data.access_token })
				return true;
			  } else {
				throw "something went wrong";
			  }
			} catch (error) {
			  throw Error("error on login");
			}
		  },

		  logout: () => {
			sessionStorage.clear();
			console.log("logout");
			setStore({ token: null });
		  },

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
}

export default getState;
