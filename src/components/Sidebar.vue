<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar" style="padding-top:0">
      <div class="sidebar-sticky">
                <router-link class="nav-link" to="/">
          <img src="./img/Logo-Steam.png" alt width="150px" class="navbar-logo" />
        </router-link>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">
              <i class="fas fa-box-open"></i>產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders">
              <i class="fas fa-box-open"></i>訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupons">
              <span data-feather="file-text"></span>
              <i class="fas fa-shopping-cart"></i>優惠券
            </router-link>
          </li>
        </ul>
        <h6
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <span data-feather="file-text"></span>
              <i class="fas fa-shopping-cart"></i>模擬訂單
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>