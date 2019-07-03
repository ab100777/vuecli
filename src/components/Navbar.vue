<template>
  <div>
    <!-- <nav class="navbar navbar-dark fixed-top bg-primary flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white" href="#" @click.prevent="signout">Sign out</a>
        </li>
      </ul>
    </nav>-->
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class href="home.html">
          <img src="./img/logo-all-dark.svg" alt height="40px" class="navbar-logo" />
        </a>
        <div class="collapse navbar-collapse order-sm-1" id="navbarNav">
          <ul class="navbar-nav ml-auto" style="font-weight: bolder;">
            <li class="nav-item">
              <router-link class="nav-link" to="/customer_order">
                <span data-feather="file-text"></span>
                <i class="fas fa-shopping-cart"></i>甜點
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                <span data-feather="file-text"></span>
                <i class="fas fa-shopping-cart"></i>購物車
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="login.html">登入</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signout() {
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      this.$http.post(url).then(response => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push("/signin");
        }
      });
    }
  }
};
</script>