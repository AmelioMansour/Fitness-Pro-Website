<script>
	import { text } from 'svelte/internal';
	import axios from 'axios';
	import Nav from '../nav.svelte';
	//export let username = '';

	export let email = '';
	export let password = '';
	//let firstName = ''; //use on main page as name.
	//let lastName = '';
	function login() {
		//IF VERIFY LOGIN
	}

 	async function addUser() {
		try {
			const user = {
				email,
				password
			};
			console.log('Called!');

			await fetch('/api/adduser', {
				method: 'POST',
				body: JSON.stringify(user)
			});
			 console.log(JSON.stringify(user))
			
			//sets field (firstname) blank
			email = '';
		} catch (err) {
			alert(err);
			//text = '';
		}
	} 

	$: submit = async () => {
        const response = await axios.post('https://fitness-pro-project.herokuapp.com/login', {
            email,
            password
        }, {withCredentials: true});

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            await push('/');
        }
    }

</script>

<Nav active="login" />

<main class="form-signin">
<div class="container text-center">
	<form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <p>Email</p>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
            <p>Password</p>
        </div>

        <button on:click={addUser} class="my-4" id="submitLogin"> Submit </button>
    </form>
	<!-- <form action="createaccount" method="post"> -->
	<!-- Login on form submission. -->
	<!-- Either have login make a new account if username and password not same
    or have a seperate register page, or ask them if they want to make a new account because
the account isnt already registered -->
	<!-- <h1 id="nameLabel">First Name</h1> -->
<!-- 	<input
		type="text"
		bind:value={firstName}
		placeholder="Enter first name"
		id="firstNameInput"
		name="first"
	/> -->
<!-- 	<h1 id="nameLabel">Last Name</h1> -->
<!-- 	<input
		type="text"
		bind:value={lastName}
		placeholder="Enter last name"
		id="lastNameInput"
		name="last"
	/> -->
<!-- 	<h1 id="EmailLabel">Email</h1>
	<input
		type="text"
		bind:value={email}
		placeholder="Enter Email"
		id="usernameInput"
		name="user"
	/>
	<h1 id="passwordLabel">Password</h1>
	<input
		type="password"
		bind:value={password}
		placeholder="Enter Password"
		id="passwordInput"
		name="pass"
	/>
	<br />
	 <input type="Submit" value="Submit"/> -->
	
	<!-- </form> -->

<!-- 	<p>{firstName}</p>
	<p>{lastName}</p> -->
<!-- 	<p>{email}</p>
	<p>{password}</p> -->
</div>
</main>

<style>
	p {
		color: black;
		font-size: 1.5rem;
		margin: .001rem;
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
