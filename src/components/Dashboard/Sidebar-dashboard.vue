<template>
  <div class="sidebar-root">
      <div class="logo-content">
          <h1>Loooogo</h1>
      </div>
      <div class="nav-content">
            <ul>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Dashboard">Hjem</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Transfer">Overfør</router-link>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">something</a>
                </li>
            </ul>
      </div>
      <div class="sidebar-footer">

      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$purple: #4B0082;

    .sidebar-root {
        position: relative;
        height: 100vh;
        width: 300px;
        background-color: $purple;
        display: flex;
        flex-direction: column;
        z-index: 99;
        color: white;

        .logo-content {
            position: relative;
            height: 200px;
            width: 100%;
        }

        .nav-content {
            width: 100%;
            height: 50%;
            padding-top: 15%;

            ul {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                height: 100%;
            }

            .nav-item {
                width: 100%;
                height: 50px;
                line-height: 50px;
                

                a {
                    width: 100%;
                    text-decoration: none;
                    display: block;
                    color: white;
                }

                a:hover {
                    background-color: #38005f ;
                    transition: 0.4s;
                }
            }

        }
        .sidebar-footer {
                position: relative;
                width: 100%;
                height: 80%;

                
            }
    } 
</style>