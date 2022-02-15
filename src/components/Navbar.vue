<template>
<div class="navbar-root">
    <div class="navbar">
        <div class="navbar-logo-content">
            <h1>De forenede banker</h1>
        </div>
        <div class="navbar-items-content">
            <ul>
                <li class="nav-item">
                    <router-link to="/Login" class="nav-link">Login</router-link>
                    
                </li>
                <li class="nav-item">
                    <router-link to="/Dashboard" class="nav-link">Dashboard test</router-link>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Kunde support</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-root {
    position: fixed;
    height: 100px;
    width: 100%;
    z-index: 99;
    font-weight: 600;

}

.navbar {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
}

.navbar-logo-content {
    text-align: center;
    width: 400px;
    line-height: 100px;
    color: whitesmoke;
}

h1{
    font-size: 23px;
    
}

.navbar-items-content  {
    width: 100%;
    height: 100%;
    margin:0;
}

ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-decoration: none;
    justify-content:space-evenly;
    height: 100px;
}

li, a {
    list-style-type: none;
    color: whitesmoke;
    line-height: 100px;
    height: auto;
    font-size: 15px;
    height: 100%;
    text-align: center;
    transition: 0.3s;
    text-decoration:none;
}

a {
    font-size: 18px;
}
    a:hover {
        color: black;
        background: white;
        border-radius: 20px;
        padding: 10px;
    }
    li:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }

@media screen and (max-width: 720px) {
    .navbar-logo-content {
        width: 300px;
    }

    h1 {
        font-size: 15px;
        transition: 0.3s;

    }

    a {
        font-size: 12px;
        transition: 0.3s;
    }
}
</style>