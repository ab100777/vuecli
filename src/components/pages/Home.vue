<template>
  <div>
    <div class="container">
      <b-alert
        v-model="showDismissibleAlert"
        class="cart-alert"
        variant="success"
        dismissible
      >成功加入購物車</b-alert>
      <div class="row justify-content-center">
        <div class="col-10">
          <SwiperSlider></SwiperSlider>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-sm-8">
          <!-- <div class="text-primary text-center p-3" style="background-color:rgba(255,255,255,0.2);"> -->
            <div class="text-primary text-center px-3 py-5">
            <h3>每個女人的衣櫥總是會少一件衣服，每個男人的遊戲櫃也永遠少一部遊戲，歡迎在這裡尋找你缺少的遊戲</h3>
          </div>
        </div>
      </div>
      <div style="padding-bottom:1px;">
        <h1 class="text-info text-center">熱賣商品</h1>
        <div class="row">
          <div class="col-sm-4 mb-4" v-for="item in hotProducts" :key="item.id">
            <div>
              <div
                class="bg-cover"
                :style="{backgroundImage:`url(${item.imageUrl})`}"
                style="height:200px;"
              ></div>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="item-name text-secondary py-2 text-center border-right-0"
                  >{{item.title}}</div>
                </div>
                <div class="col-sm-12">
                  <div class="item-price text-secondary py-2 text-center">{{item.price | currency}}</div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-7">
                  <button
                    class="item-btn btn btn-block btn-primary text-info rounded-0 py-3"
                    @click="addToCart(item.id)"
                  >加入購物車</button>
                </div>
                <div class="col-5">
                  <button
                    class="item-btn btn btn-block btn-primary text-info rounded-0 py-3"
                    @click="getProduct(item.id)"
                  >查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import SwiperSlider from "../SwiperSlider";
export default {
  components: {
    SwiperSlider
  },
  data() {
    return {
      products: [],
      product: {},
      page: {},
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      status: {
        loadingItem: ""
      },
      isLoading: false,
      showDismissibleAlert: false
    };
  },
  methods: {
    getProducts(page) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
        vm.pagination = response.data.pagination;
      });
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then(response => {
        vm.product = response.data.product;
        console.log(response);
        vm.$router.push(`/commodity/${id}`);
        vm.status.loadingItem = "";
      });
    },
    addToCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      vm.showDismissibleAlert = false;
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
        if (response.data.success) {
          vm.showDismissibleAlert = true;
        }
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      });
    }
  },
  computed: {
    hotProducts() {
      return this.products.slice(2, 5);
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>