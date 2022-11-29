<script>
	import { name } from 'body-parser';
	import { text } from 'svelte/internal';
	import Nav from './nav.svelte';

	export let username = '';

	let UserID = '';
	let password = '';
	let firstName = ''; //use on main page as name.
	let lastName = '';

	function login() {
		//IF VERIFY LOGIN
	}

	async function LoginUser() {
		try {
			const user = {
				username,
				password
			};
			console.log('Called!');

			await fetch('/api/loginuser', {
				method: 'POST',
				body: JSON.stringify(user)
			})
				.then((Response) => Response.text())
				.then((data) => {
					UserID = data;
				});

			console.log(UserID);
		} catch (err) {
			alert(err);
			//text = '';
		}
		if (UserID != '') {
			//reference node
			var referenceNode = document.querySelector('#place');
			//creates greeting
			var greeting = document.createElement('h1');
			greeting.setAttribute('id', 'greeting');
			greeting.setAttribute('textContent', 'Hello, user: ' + username + '!');
			console.log(greeting);
			referenceNode.parentNode.insertBefore(greeting, referenceNode);
		}
	}
</script>

<Nav active="login" />
{#if UserID != null || UserID != ''}
	<h1 class="text-center">Welcome, {username}!</h1>
{/if}
<div id="Loginsection" class="container text-center">
	<!-- <form action="createaccount" method="post"> -->
	<!-- Login on form submission. -->
	<!-- Either have login make a new account if username and password not same
    or have a seperate register page, or ask them if they want to make a new account because
the account isnt already registered -->

	<h1 id="usernameLabel">Username</h1>
	<input
		type="text"
		bind:value={username}
		placeholder="Enter username"
		id="usernameInput"
		name="user"
	/>
	<h1 id="passwordLabel">Password</h1>
	<input
		type="password"
		bind:value={password}
		placeholder="Enter password"
		id="passwordInput"
		name="pass"
	/>
	<br />
	<!-- <input type="Submit" value="Submit"/> -->
	<button on:click={LoginUser} class="my-4" id="submitLogin"> Submit </button>
	<!-- </form> -->
	<p>{UserID}</p>
	<p>{username}</p>
	<p>{password}</p>
</div>
<div>
	<h2 id="place">hi</h2>
</div>

<style>
	/* #workouts, #goals, #achievments,#home  {
		display: none;
	} */
	/* nav=["nav.svelte"]{
		nav.label{
			display: none;
		}
	} */
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
