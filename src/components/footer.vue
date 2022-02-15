<template>
  <div class="footers">
     <div class="left-footer">
         <p>Adresse: {{adress}}</p>
         <p>Tlf nr: {{tlfNumber}}</p>
     </div>
     <div class="right-footer">

     </div>
  </div>
</template>

<script>
export default {
    name: 'footers',
    data() {
        return {
            adress: 'EtEllerAndetSted',
            tlfNumber: '+45 1001 1101'
        }
    }
}
</script>

<style lang="scss" scoped>
.footers {
    width: 100%;
    height: 100px;
    background-color: black;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;

    color: white;

    .left-footer {
        width: 100%;
        height: 100%;
    }

    .right-footer {
        width: 100%;
        height: 100%;
    }
}


@media screen and (max-width: 720px) {
    .footer {
        bottom: -00px;
    }
}
</style>