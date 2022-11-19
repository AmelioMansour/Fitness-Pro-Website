<script>
    import Nav from "../nav.svelte";
    export let username = ""
    let password = ""
    let firstName = "" //use on main page as name.
    let lastName = ""
    function login() {
        //IF VERIFY LOGIN
    }
</script>

<Nav active="login"></Nav>
<div class="container text-center">
    <form action="/" method="POST"> 
    <!-- Login on form submission. -->
    <!-- Either have login make a new account if username and password not same
    or have a seperate register page, or ask them if they want to make a new account because
the account isnt already registered -->
    <h1 id="nameLabel">First Name</h1>
    <input type="text" bind:value={firstName} placeholder="Enter first name" id="firstNameInput">
    <h1 id="nameLabel">Last Name</h1>
    <input type="text" bind:value={lastName} placeholder="Enter last name" id="lastNameInput">
    <h1 id="usernameLabel">Username</h1>
    <input type="text" bind:value={username} placeholder="Enter username" id="usernameInput">
    <h1 id="passwordLabel">Password</h1>
    <input type="password" bind:value={password} placeholder="Enter password" id="passwordInput">
    <br>
    <button on:click={login} class="my-4" id="submitLogin"> Submit </button>
    </form>

</div>

<style>
    h1 {
        color: black;
        font-size: 1.5rem;
        margin: .5rem
    }
    input{
        outline: 4px solid #3F9FFE;
        border-radius: 6px;
        border: none
    }
    #submitLogin {
        border-radius: 10px;
        color: #0080FF;
        /* background-color: #3F9FFE; */
        border: 5px solid #0080FF;
        width: 15%;
    }
</style>