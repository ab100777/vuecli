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
        <router-link class="nav-link" to="/CustomerOrders">
          <img src="./img/Logo-Steam.png" alt width="150px" class="navbar-logo" />
        </router-link>
        <div class="collapse navbar-collapse order-sm-1" id="navbarNav">
          <ul class="navbar-nav ml-auto" style="font-weight: bolder;font-size:15px">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <span data-feather="file-text"></span>
                <i class="fas fa-home"></i>
                首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/CustomerOrders">
                <span data-feather="file-text"></span>
                <i class="fas fa-box-open"></i>商城
              </router-link>
            </li>
            <!-- <li class="nav-item" v-for="item in cart.carts" :key="item.id"> -->
              <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                <span data-feather="file-text"></span>
                <i class="fas fa-shopping-cart"></i>
                購物車
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
  // data() {
  //   return {
  //     cart: {}
  //   };
  // },
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
    },
    // getCart() {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
    //   this.$http.get(url).then(response => {
    //     vm.cart = response.data.data;
    //     console.log(response);
    //   });
    // }
  },
  // created() {
  //   this.getCart();
  // }
};
</script>