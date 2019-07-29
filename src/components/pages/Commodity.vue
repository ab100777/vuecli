<template>
  <div>
    <!-- <div v-for="item in products" :key="item.id">
      <div class="bg-cover item-img" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
    </div> -->
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
    getCommodity() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      this.$http.get(url).then(response => {
        // vm.product = response.data.product;
        console.log(response);
      });
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
  }
};
</script>