<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <SwiperSlider></SwiperSlider>
      <div class="row">
        <div class="col-sm-4 mb-5 px-sm-3 px-0">
          <div
            class="list-group"
            style="font-weight: bolder;font-size: 24px;background-color: rgb(43, 42, 65)"
          >
            <a
              href="#all"
              class="list-group-item list-group-item-action text-center text-primary border-0 active"
              style="background-color: rgb(43, 42, 65)"
              data-toggle="list"
            >所有類別</a>
            <a
              href="#RPG"
              class="list-group-item list-group-item-action text-center text-primary border-0"
              style="background-color: rgb(43, 42, 65)"
              data-toggle="list"
              @click.prevent="link='RPG'"
            >角色扮演</a>
            <a
              href="#shooting"
              class="list-group-item list-group-item-action text-center text-primary border-0"
              style="background-color: rgb(43, 42, 65)"
              data-toggle="list"
            >射擊</a>
            <a
              href="#action"
              class="list-group-item list-group-item-action text-center text-primary border-0"
              style="background-color: rgb(43, 42, 65)"
              data-toggle="list"
            >動作</a>
            <a
              href="#adventure"
              class="list-group-item list-group-item-action text-center text-primary border-0"
              style="background-color: rgb(43, 42, 65)"
              data-toggle="list"
            >冒險</a>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="tab-content">
            <div class="tab-pane active" id="all" role="tabpanel">
              <div class="row">
                <div class="col-12 mb-4" v-for="item in products" :key="item.id">
                  <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div
                        class="item-name text-secondary py-2 text-center border-right-0"
                      >{{item.title}}</div>
                    </div>
                    <div class="col-sm-6">
                      <div
                        class="item-price text-secondary py-2 text-center"
                      >{{item.price | currency}}</div>
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
                      <!-- <router-link class="nav-link" to="/Commodity/{products.id}">
                        <button
                          class="item-btn btn btn-block btn-primary text-info rounded-0 py-3"
                          @click="getProduct(item.id)"
                        >查看更多</button>
                      </router-link>-->
                      <button
                        class="item-btn btn btn-block btn-primary text-info rounded-0 py-3"
                        @click="getProduct(item.id)"
                      >查看更多</button>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item" :class="{'disabled':!pagination.has_pre}">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Previous"
                      @click.prevent="getProducts(pagination.current_page - 1)"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li
                    class="page-item"
                    v-for="page in pagination.total_pages"
                    :key="page"
                    :class="{'active':pagination.current_page===page}"
                  >
                    <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
                  </li>
                  <li class="page-item" :class="{'disabled':!pagination.has_next}">
                    <a
                      class="page-link"
                      href="#"
                      aria-label="Next"
                      @click.prevent="getProducts(pagination.current_page + 1)"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="tab-pane" id="RPG" role="tabpanel">
              <div class="row" v-for="item in products" :key="item.id">
                <div class="col-12 mb-4" v-if="item.category=='角色扮演'">
                  <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                  <div class="row">
                    <div class="col-6">
                      <div class="item-name text-secondary py-2 text-center">{{item.title}}</div>
                    </div>
                    <div class="col-6">
                      <div
                        class="item-price text-secondary py-2 text-center"
                      >{{item.price | currency}}</div>
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
            <div class="tab-pane" id="shooting" role="tabpanel">
              <div class="row" v-for="item in products" :key="item.id">
                <div class="col-12 mb-4" v-if="item.category=='射擊'">
                  <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                  <div class="row">
                    <div class="col-6">
                      <div class="item-name text-secondary py-2 text-center">{{item.title}}</div>
                    </div>
                    <div class="col-6">
                      <div
                        class="item-price text-secondary py-2 text-center"
                      >{{item.price | currency}}</div>
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
            <div class="tab-pane" id="action" role="tabpanel">
              <div class="row" v-for="item in products" :key="item.id">
                <div class="col-12 mb-4" v-if="item.category=='動作'">
                  <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                  <div class="row">
                    <div class="col-6">
                      <div class="item-name text-secondary py-2 text-center">{{item.title}}</div>
                    </div>
                    <div class="col-6">
                      <div
                        class="item-price text-secondary py-2 text-center"
                      >{{item.price | currency}}</div>
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
            <div class="tab-pane" id="adventure" role="tabpanel">
              <div class="row" v-for="item in products" :key="item.id">
                <div class="col-12 mb-4" v-if="item.category=='冒險'">
                  <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                  <div class="row">
                    <div class="col-6">
                      <div class="item-name text-secondary py-2 text-center">{{item.title}}</div>
                    </div>
                    <div class="col-6">
                      <div
                        class="item-price text-secondary py-2 text-center"
                      >{{item.price | currency}}</div>
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
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <img :src="product.imageUrl" class="bg-cover" style="width: 100%;height: 400px" alt />
              </div>
              <div class="col-12">
                <blockquote class="blockquote mt-3">
                  <p class="mb-0">{{product.content}}</p>
                </blockquote>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!product.price">{{product.origin_price | currency}}</div>
                  <div
                    class="h6"
                    style="text-decoration:line-through"
                    v-if="product.price"
                  >原價{{product.origin_price | currency}}</div>
                  <div class="h5 text-danger" v-if="product.price">特價{{product.price | currency}}</div>
                </div>
              </div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}}套</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{product.num * product.price}}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id,product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import SwiperSlider from "Swiper";


export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: ""
        },
        message: ""
      },
      cart: {},
      isLoading: false,
      coupon_code: "",
    };
  },
    components: {
      SwiperSlider
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
      // const vm = this;
      // const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      // vm.status.loadingItem = id;
      // this.$http.get(url).then(response => {
      //   vm.product = response.data.product;
      //   $("#productModal").modal("show");
      //   console.log(response);
      //   vm.status.loadingItem = "";
      // });
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
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        vm.getCart();
        $("#productModal").modal("hide");
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
    // removeCartItem(id) {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
    //   vm.isLoading = true;
    //   this.$http.delete(url).then(response => {
    //     vm.getCart();
    //     console.log(response);
    //     vm.isLoading = false;
    //   });
    // },
    // addCouponCode() {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
    //   const coupon = {
    //     code: vm.coupon_code
    //   };
    //   vm.isLoading = true;
    //   this.$http.post(url, { data: coupon }).then(response => {
    //     vm.getCart();
    //     console.log(response);
    //     vm.isLoading = false;
    //   });
    // },
    // createOrder() {
    //   const vm = this;
    //   const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
    //   const order = vm.form;
    //   // vm.isLoading = true;
    //   this.$validator.validate().then(result => {
    //     if (result) {
    //       this.$http.post(url, { data: order }).then(response => {
    //         vm.getCart();
    //         console.log("訂單已建立", response);
    //         if (response.data.success) {
    //           vm.$router.push(`/customer_checkout/${response.data.orderId}`);
    //         }
    //         vm.isLoading = false;
    //       });
    //     } else {
    //       console.log("欄位不完整");
    //     }
    //   });
    // }
  },
  created() {
    this.getProducts();
    this.getCart();
  }
};
</script>