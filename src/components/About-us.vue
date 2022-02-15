<template>
  <div class="about-us-root">
      <div class="about-us-top">
            <div class="about-top-left">

            </div>
            <div class="about-top-right">
                <h2>Vores mission </h2>
                <div class="top-right-content">
                    <ul class="ul-list">
                        <li>1. Samle alle danske banker</li>
                        <li>2. Krypteret og sikker infrastruktur</li>
                        <li>3. bestille pizza</li>
                        <li>4. ???</li>
                        <li>5. PROFIT</li>
                    </ul>
                </div>
          </div>
      </div>
        <div class="about-us-bottom">
            <div class="about-bottom-left">
                <h2>Jeres mission </h2>
                <div class="top-right-content">
                    <ul class="ul-list">
                        <li>1. Hurtig og nemt tilgang til din bank</li>
                        <li>3. Ingen nysgerrig mellemmand ( undtagen end Frank fra IT-Support )</li>
                        <li>3. !!!</li>
                        <li>4. - Proft </li>
                    </ul>
                </div>
            </div>
            <div class="about-bottom-right">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@mixin text-list {
    width: 100%;
    height: 100%;   
    background-color: transparent; 
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        color: white;
        padding: 0px 20px 20px 20px;
    }

     ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
                
        li {
            text-decoration: none;
            color: white;
            margin: auto;
            padding-top: 10px;
        }
    }
}

.about-us-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    

    .about-us-top
    {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;

        .about-top-left {
            width: 100%;
            height: 100%;   
            background-image: url(../assets/cph1.jpg);
            background-size: cover;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }

        .about-top-right {
            
            @include text-list;
        }
    }

    
    .about-us-bottom
    {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;

        .about-bottom-left {
          @include text-list;
        }

        .about-bottom-right {
            width: 100%;
            height: 100%;   
            box-shadow: rgba(50, 50, 93, 0.25) 10px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

            background-image: url(../assets/emptywallet.jpg);
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}


@media screen and (max-width: 720px)
{
    .about-us-root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

            
        .about-us-top
        {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column-reverse;

        }

        .about-us-bottom
        {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }

}

</style>