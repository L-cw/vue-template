<template>
  <div class="page-header">
    <div class="content">
      <div class="logo-box">
        <img src="../../assets/images/logo.png" alt="" class="logo">
        <div class="logo-text">跨链资产兑换演示平台</div>
      </div>
      <div class="nav-box">
        <router-link class="nav-item" exact tag="div" to="/">首页</router-link>
        <router-link class="nav-item" exact tag="div" to="/demo/form">form</router-link>
        <router-link class="nav-item" exact tag="div" to="/demo/list">list</router-link>
        <router-link class="nav-item" exact tag="div" to="/demo/other">other</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped>
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
    width: 100%;
    height: @header-height;
    transition: all .5s ease 0s;
    box-shadow: 0 0 10px #ccc;
    background-color: #fff;
    & .content {
      display: flex;
      height: @header-height;
      justify-content: space-between;
    }
    & .logo-box {
      display: flex;
      align-items: center;
      .logo {
        width: 100px;
        height: 30px;
      }
      & .logo-text {
        color: @ft-color-title;
        font-weight: 600;
      }
    }
    & .nav-box {
      display: flex;
      .nav-item {
        height: 100%;
        margin-right: 20px;
        position: relative;
        line-height: @header-height;
        padding: 0 20px;
        cursor: pointer;
        &.router-link-active {
          color: @theme-color;
          &:after {
            content: "";
            display: block;
            width: 100%;
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            transition: all .4s;
            background: @theme-color;
            z-index: 0;
          }
        }
        &:hover {
          color: @theme-color;
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
</style>
