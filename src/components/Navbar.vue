<template>
  <div>
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
        <router-link class="nav-link" to="/">
          <img src="./img/Logo-Steam.png" alt width="150px" class="navbar-logo" />
        </router-link>
        <div class="collapse navbar-collapse order-sm-1" id="navbarNav">
          <ul class="navbar-nav ml-auto" style="font-weight: bolder;font-size:15px">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <span data-feather="file-text"></span>
                <i class="fas fa-box-open"></i>商城
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                <span data-feather="file-text"></span>
                <i class="fas fa-shopping-cart"></i>購物車
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <span data-feather="file-text"></span>
                登入
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <span data-feather="file-text" @click="signout">登出</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/products">
                <span data-feather="file-text"></span>
                後台系統
              </router-link>
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
          vm.$router.push("/loginin");
        }
      });
    }
  }
};
</script>