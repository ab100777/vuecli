<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
          <div style="background-color:rgb(43, 42, 65);padding-top:40px;padding-bottom:1px">
            <router-view></router-view>
          </div>
          <footer style="background-color:rgb(43, 42, 65);" class="py-3">
            <div style="display:flex" class="justify-content-center"><img src="./img/logo_steam_footer.png" alt=""></div>
          </footer>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Alert from "./AlertMessage";

export default {
  components: {
    Navbar,
    Alert
  }
};
</script>

<style scoped>
footer{
  padding-top: 20%
}
</style>
