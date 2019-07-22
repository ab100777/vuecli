<template>
  <div>
    <Navbar></Navbar>
    <Alert></Alert>
    <div class="container-fluid" style="background-color:rgb(43, 42, 65)">
      <div class="row">
        <main role="main" class="container">
          <router-view></router-view>
        </main>
      </div>
    </div>
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