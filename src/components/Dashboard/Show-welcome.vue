<template>
  <div class="welcome-root">
      <div class="upper-boxes ">
        <div class="left-up small-component-box">
          <h4>Velkommen: {{ name }} </h4>
        </div>
        <div class="right-up small-component-box">
            <h4>Ind/ud for idag: </h4>
            <p> {{ moneyInNOut }} Kr. </p>
        </div>
      </div>
      <div class="lower-box">
          <div class="lower-upper-box">
              <h4>Vejret denne uge: </h4>
          </div>
          <div class="lower-lower-box">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'welcome-root',
    data() {
        return {
            name: 'John Doe',
            moneyInNOut: '999'
        }
    }
}
</script>

<style lang="scss">
    .welcome-root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;

        .upper-boxes {
            display: flex;
            flex-direction: row;
            height: 100%;
            width: 100%;

            .left-up {
                height: 80%;
                width: 100%;
                background-color: greenyellow;
            }
            .right-up {
                height: 80%;
                width: 100%;
                background-color: green;
            }
        }

        .lower-box {
            display: flex;
            flex-direction: column;
            height: 80%;
            width: 97%;
            margin: auto;
            margin-top: 10px;
            border-radius: 10px;
            background-color: green;

            .lower-upper-box{
                position: relative;
                padding-top: 5px;
                padding-bottom: 5px;
                width: 100%;
                height: 20px;
                border-bottom: 1px solid black;
            }

            .lower-lower-box {
                position: relative;
                width: 98%;
                height: 100%;
                padding-left: 1%;
                padding-right: 1%;
            }
           
        }
    }

    .small-component-box {
        width: 100%;
        height: 100%;
        text-align: left;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
    }
</style>