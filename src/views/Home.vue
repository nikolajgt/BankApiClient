<template>
  <div class="home">
    <div class="dashboard-root">
      <div class="left-side-dashboard">
        <div class="left-upper-box">
          <div class="component-box">
            <Welcome />
          </div>
        </div>
        <div class="left-lower-box">
          <div class="component-box">
            <Accounts />
          </div>
        </div>
      </div>
      <div class="right-side-dashboard">
        <div class="right-upper-box">
          <div class="component-box">
            <Accounts />
          </div>
        </div>
        <div class="right-lower-box">
          <div class="component-box">
            <Transactions />
          </div>
        </div>
      </div>
  </div>

    
  </div>
</template>

<script>
// @ is an alias to /src

 import Accounts from '../components/Dashboard/Show-accounts.vue'
 import Welcome from '../components/Dashboard/Show-welcome.vue'
 import Transactions from '../components/Dashboard/Show-transactions.vue'

export default {
  name: 'Home',
  components: {
    Transactions,
    Accounts,
    Welcome

  }
}
</script>

<style lang="scss" scoped>
$purple: #4B0082;
$grey-dark: #333333;
$purple-dark: #2e0749;

@mixin center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@mixin boxes {
  height: 100%;
  width: 100%;
  @include center;
}

.home {
  position: absolute;
  top:0;
  right:0;
  height: 100%;
  width: calc(100% - 300px);
  display: flex;
  flex-direction: row;
  background-color: white;
  overflow-x: hidden;
  justify-content: center;

  .dashboard-root {
    position: relative;
    top:0;
    width: 90%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: 30px;
    
    .left-side-dashboard {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      .left-upper-box {
        @include boxes;
      }
      .left-lower-box {
        @include boxes;
      }
    }

    .right-side-dashboard {
      height: 100%;
      width: 100%;
      
      display:flex;
      flex-direction: column;

      .right-upper-box {
        @include boxes;

      }
      .right-lower-box {
        @include boxes;
 
      }
    }
  }
}

.component-box {
  height: 90%;
  width: 90%;
}
</style>