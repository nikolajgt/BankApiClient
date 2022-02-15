<template>
  <div class="accounts-root">
      <h3>Mine konti'er</h3>
      <div class="accounts-list">

      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'accounts-root',
  data() {
    return {
      User: {
        Firstname: '',
        Lastname: '',
        MainAccountBalance: '',
        SubAccount: []
      },
      token: '',
    }
  },
  computed: {
    ...mapGetters("DashboardComponents", {
      getUserData: 'getUserData'
    })
  },
  methods: {
    ...mapActions("DashboardComponents", {
      actionUserAccounts: "getUserAccounts"
    }),
    async UserAccounts() {
      const token = localStorage.getItem("access_token");
      await this.actionUserAccounts(token);
      console.log(this.getUserData);
    }
  },
  created() {
    
    this.UserAccounts()
  }

}
</script>

<style lang="scss" scoped>
$purple: #4B0082;

.accounts-root {
    width: 100%;
    height: 100%;
    background-color: $purple;
    border-radius: 10px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>