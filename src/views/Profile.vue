<template>
  <div class="profile">
    <van-nav-bar title="个人中心" />

    <div class="user-info">
      <van-cell-group inset>
        <van-cell center title="头像">
          <template #right-icon>
            <van-image
              round
              width="50"
              height="50"
              src="https://fastly.picsum.photos/id/64/200/200.jpg"
            />
          </template>
        </van-cell>
        <van-cell title="用户名" value="Amazon User" />
        <van-cell title="手机号" value="138****8888" />
      </van-cell-group>
    </div>

    <div class="order-overview">
      <van-cell-group inset title="我的订单">
        <van-grid :column-num="4">
          <van-grid-item icon="pending-payment" text="待付款" to="/orders?status=pending" />
          <van-grid-item icon="logistics" text="待发货" to="/orders?status=processing" />
          <van-grid-item icon="send-gift-o" text="待收货" to="/orders?status=shipped" />
          <van-grid-item icon="comment-o" text="待评价" to="/orders?status=completed" />
        </van-grid>
      </van-cell-group>
    </div>

    <div class="user-tools">
      <van-cell-group inset title="常用功能">
        <van-cell title="收货地址" is-link to="/address" />
        <van-cell title="优惠券" is-link to="/coupons" />
        <van-cell title="我的收藏" is-link to="/favorites" />
        <van-cell title="浏览历史" is-link to="/history" />
      </van-cell-group>
    </div>

    <div class="settings">
      <van-cell-group inset>
        <van-cell title="设置" is-link to="/settings" />
        <van-cell title="帮助中心" is-link to="/help" />
      </van-cell-group>
    </div>

    <van-button class="logout-btn" block type="danger" size="large">退出登录</van-button>
  </div>
</template>

<script setup>
import { NavBar, Cell, CellGroup, Image as VanImage, Grid, GridItem, Button } from 'vant'
</script>

<style scoped>
.profile {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 20px;
}

.user-info {
  margin-top: 12px;
}

.order-overview {
  margin-top: 12px;
}

.user-tools {
  margin-top: 12px;
}

.settings {
  margin-top: 12px;
}

.logout-btn {
  margin: 20px 16px;
}

:deep(.van-cell-group__title) {
  padding: 16px 16px 8px;
}
</style>
