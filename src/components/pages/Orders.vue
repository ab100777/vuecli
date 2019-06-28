<template>
  <div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120px">訂購者姓名</th>
          <th width="200px">訂單編號</th>
          <th width="200px">購買品項</th>
          <th width="120px">應付金額</th>
          <th width="100px">訂購日期</th>
          <th width="100px">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{item.user.name}}</td>
          <td>{{item.id}}</td>
          <td>
            <ul>
              <li v-for="(product,key) in item.products" :key="key">{{product.product.title}}</li>
            </ul>
          </td>
          <td>{{item.total}}</td>
          <td>{{item.paid_date | time}}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openUpdateModal(false,item)">編輯</button>
            <button class="btn btn-outline-primary btn-sm" @click="getOrder(item.id)">詳細內容</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled':!pagination.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="getCoupons(pagination.current_page - 1)"
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
          <a class="page-link" href="#" @click.prevent="getCoupons(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="getCoupons(pagination.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Modal -->
    <div
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改訂單</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">優惠券名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="請輸入優惠券名稱"
                  v-model="tempCoupon.title"
                >
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="percent">折扣%數</label>
                  <input
                    type="text"
                    class="form-control"
                    id="percent"
                    placeholder="請輸入折扣%數"
                    v-model="tempCoupon.percent"
                  >
                </div>
                <div class="form-group col-md-6">
                  <label for="due_date">到期日</label>
                  <input
                    type="date"
                    class="form-control"
                    id="due_date"
                    placeholder
                    v-model="tempCoupon.due_date"
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="code">券號</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入券號"
                  v-model="tempCoupon.code"
                >
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempCoupon.is_enable"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  >
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </form>
          </div>-->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="detailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">詳細內容</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">姓名</th>
                  <th scope="col">{{order.user.name}}</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">訂單編號</th>
                  <td>{{order.id}}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      orders: {},
      order: {},
      pagination: {},
      tempOrder: {},
      isNew: false,
      isLoading: false
    };
  },
  methods: {
    getOrders(page) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/orders?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        vm.orders = response.data.orders;
        console.log(response);
        vm.isLoading = false;
        vm.pagination = response.data.pagination;
      });
    },
    getOrder(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/order/${id}`;
      // vm.status.loadingItem = id;
      this.$http.get(url).then(response => {
        vm.order = response.data.order;
        $("#detailModal").modal("show");
        console.log(response);
        // vm.status.loadingItem = "";
      });
    },
    openUpdateModal(isNew, item) {
      if (isNew) {
        this.tempOrder = {};
        this.isNew = true;
      } else {
        this.tempOrder = Object.assign({}, item);
        this.isNew = false;
      }
      $("#orderModal").modal("show");
    },

    updateOrder(page = 1) {
      let api = `${process.env.APIPATH}/api/${
        process.env.CUSTOMPATH
      }/admin/Order?page=${page}`;
      let httpMethod = "post";
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.APIPATH}/api/${
          process.env.CUSTOMPATH
        }/admin/order/${vm.tempOrder.id}`;
        httpMethod = "put";
      }
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http[httpMethod](api, { data: vm.tempOrder }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#orderModal").modal("hide");
          vm.getOrders();
        } else {
          $("#orderModal").modal("hide");
          vm.getOrders();
          console.log("新增失敗");
        }
      });
    }
  },
  created() {
    this.getOrders();
  }
};
</script>