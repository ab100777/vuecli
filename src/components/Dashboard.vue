<template>
  <div style="background-color:rgb(43, 42, 65);padding-top:1px;padding-bottom:1px">
        <!-- <Navbar></Navbar> -->
      <Alert></Alert>
    <!-- <div class="container-fluid">
      <div class="row"> -->
            <Sidebar></Sidebar>
        <!-- <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4"> -->
            <div style="margin-left:350px;">
              <router-view></router-view>
            </div>
        <!-- </main>
      </div>
    </div> -->
  </div>
</template>

<script>

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Alert from './AlertMessage'

export default {
    components:{
        Navbar,
        Sidebar,
        Alert
    }
}
</script>