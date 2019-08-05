<template>
  <div style="background-color:rgb(43, 42, 65);padding-top:1px;padding-bottom:1px">
    <Alert></Alert>
    <Sidebar></Sidebar>
    <div style="margin-left:350px;">
      <router-view></router-view>
    </div>
    <footer style="background-color:rgb(43, 42, 65);" class="pb-4">
      <div style="display:flex" class="justify-content-center">
        <img src="./img/logo_steam_footer.png" alt />
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Alert from "./AlertMessage";

export default {
  components: {
    Navbar,
    Sidebar,
    Alert
  }
};
</script>