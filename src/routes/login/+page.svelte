<script>
	import Nav from '../nav.svelte';
	export let username = '';
	let password = '';
	let firstName = ''; //use on main page as name.
	let lastName = '';
	function login() {
		//IF VERIFY LOGIN
	}

	function addUser() {
		//start of mongdb connection stuff. This part will be the same everytime interacting with db
		const { MongoClient, ServerApiVersion } = require('mongodb');
		const uri =
			'mongodb+srv://fitnesspro:Sammy123@fitnesspro-cluster.ylcv3h5.mongodb.net/?retryWrites=true&w=majority';
		const client = new MongoClient(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverApi: ServerApiVersion.v1
		});
		//end of mongodb connection stuff

		const collection = client.db('FitnessPro').collection('Users');
		// perform actions on the collection object
		const post = {
			"FirstName": firstName,
			"LastName": lastName,
			"Username": username,
			"Password": password
		}
        collection.insertOne(post);
        client.close();
	}
</script>

<Nav active="login" />
<div class="container text-center">
	<form action="/" method="POST">
		<!-- Login on form submission. -->
		<!-- Either have login make a new account if username and password not same
    or have a seperate register page, or ask them if they want to make a new account because
the account isnt already registered -->
		<h1 id="nameLabel">First Name</h1>
		<input type="text" bind:value={firstName} placeholder="Enter first name" id="firstNameInput" />
		<h1 id="nameLabel">Last Name</h1>
		<input type="text" bind:value={lastName} placeholder="Enter last name" id="lastNameInput" />
		<h1 id="usernameLabel">Username</h1>
		<input type="text" bind:value={username} placeholder="Enter username" id="usernameInput" />
		<h1 id="passwordLabel">Password</h1>
		<input type="password" bind:value={password} placeholder="Enter password" id="passwordInput" />
		<br />
		<input type="Submit" value="Submit" id="submitLogin" onclick={addUser} />
		<!-- <button on:click={login} class="my-4" id="submitLogin"> Submit </button> -->
	</form>
	<p>{firstName}</p>
	<p>{lastName}</p>
	<p>{username}</p>
	<p>{password}</p>
</div>

<style>
	h1 {
		color: black;
		font-size: 1.5rem;
		margin: 0.5rem;
	}
	input {
		outline: 4px solid #3f9ffe;
		border-radius: 6px;
		border: none;
	}
	#submitLogin {
		margin-top: 20px;
		border-radius: 10px;
		color: #0080ff;
		/* background-color: #3F9FFE; */
		border: 5px solid #0080ff;
		width: 15%;
	}
</style>
