<template>
  <div>
    <div v-for="item in product" :key="item.id">
      <!-- <div class="bg-cover item-img" :style="{backgroundImage:`url(${product.imageUrl})`}"></div> -->
      <div class="text-info">132
        {{product.title}}
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
      isLoading: false
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
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getCommodity();
    console.log(this.id);
  }
};
</script>