<script>
  export let active = ""

</script>
<svlete.head>
  <title>{active}</title>
</svlete.head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

 <nav class="navbar navbar-expand-lg align-items-center">
    <a class="nav-link mx-2" href="./"><img src="/images/logo.png" alt="FitnessPro Logo" width="200" /></a>
    <button
      class="navbar-toggler mx-3"
      type="button"
      data-toggle="collapse"
      data-target="#nav-items"
      aria-controls="nav-items"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="hamburger navbar-toggler-icon"><img src="/images/hamburger.png" alt="" width=40></span>
    </button>
    <div class="container-fluid" style="margin: 0px 5% 0px 5%">
      <div class="collapse navbar-collapse m-3 align-self-center" id="nav-items">
        <ul class="navbar-nav justify-content-end align-items-center navigation" style="width: 100%">
          <li><a id="workouts" class="nav-link mx-2 " href="/workouts" class:active-tab={active == "workouts"}>Workouts</a></li>
          <li><a id="goals" class="nav-link mx-2" href="/goals" class:active-tab={active == "goals"}>Goals</a></li>
          <li><a id="achievments" class="nav-link mx-2" href="/achievements" class:active-tab={active == "achievements"}>Achievements</a></li>
          <li><a id="register" class="nav-link mx-2" href="/register" class:active-tab={active == "register"}>Register</a></li>
          <li><a id="home" class="nav-link mx-2" href="/" class:active-tab={active == "Login"}>Login</a></li>
          <!-- <li><a class="nav-link mx-2" href="home"><img src="./images/logo.png" alt="" width="200"></a></li> -->
        </ul>
      </div>
    </div>
  </nav>


  <style>
    *{
    padding: 0;
    margin: 0;
    color: #212121 !important;
    background-color: #e7f4e4 !important;
}
  .active-tab{
    font-weight: bold !important;
  }
  .hamburger{
    position: relative;
    bottom: .3rem;
    right: .3rem;
  }

  </style>