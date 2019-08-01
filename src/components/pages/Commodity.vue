<template>
  <div>
    <div class="container" >
      <div class="row">
        <div class="col-7 mb-4">
          <div class="bg-cover item-img" :style="{backgroundImage:`url(${product.imageUrl})`}"></div>
        </div>
        <div class="col-5">
          <h1 class="text-secondary">{{product.title}}</h1>
          <h5 class="text-secondary">{{product.content}}</h5>
          <div class="d-flex justify-content-between align-items-baseline mt-5" style>
            <div class="h5" v-if="!product.price">{{product.origin_price | currency}}</div>
            <div
              class="h6 text-info"
              style="text-decoration:line-through"
              v-if="product.price"
            >原價{{product.origin_price | currency}}</div>
            <div class="h5 text-danger" v-if="product.price">特價{{product.price | currency}}</div>
          </div>
          <div class="row align-items-end">
            <div class="col-4">
              <select name class="form-control mt-3" v-model="product.num">
                <option :value="num" v-for="num in 10" :key="num">選購 {{num}}套</option>
              </select>
            </div>
            <h6 class="col-4 text-info text-nowrap">
              總計
              <strong>{{product.num * product.price}}</strong> 元
            </h6>
            <div class="col-4">
              <button
                type="button"
                class="btn btn-primary text-info"
                @click="addToCart(product.id,product.num)"
              >
                <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: "",
      isLoading: false,
      status: {
        loadingItem: ""
      }
    };
  },
  methods: {
    getCommodity(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${vm.id}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.product = response.data.product;
        console.log(response);
        vm.isLoading = false;
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
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getCommodity();
    console.log(this.id);
  }
};
</script>