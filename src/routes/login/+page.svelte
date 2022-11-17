<script>
    import Nav from "../nav.svelte";
    export let username = ""
    let password = ""
    function login() {
        //IF VERIFY LOGIN
    }
</script>

<Nav active="login"></Nav>
<div class="container text-center">
<h1 id="usernameLabel">Username</h1>
<input type="text" bind:value={username} placeholder="Enter username" id="usernameInput">
<h1 id="passwordLabel">Password</h1>
<input type="password" bind:value={password} placeholder="Enter password" id="passwordInput">
<br>
<a href="/"><button on:click={login}> Submit </button></a>
<h1>Username: {username}</h1>
<h1>Password: {password}</h1>
</div>

<style>
    #usernameLabel, #passwordLabel {
        color: #3F9FFE;
        font-size: 2rem;
    }
    #usernameInput, #passwordInput{
        outline: 2px solid #3F9FFE;
    }
</style>