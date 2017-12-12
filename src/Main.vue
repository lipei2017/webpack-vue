<template>
  <div>
  <div class="tabs">
    <ul>
      <li>
        <router-link :to="{name:'Home'}" tag="li" replace>
          <div>Home</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Categories'}" tag="li">
          <div>Categories</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'ShoppingCart'}" tag="li">
          <div>ShoppingCart</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Me'}" tag="li">
          <div>Me</div>
        </router-link>
      </li>
    </ul>
  </div>
    <transition name="slider-fade"><router-view></router-view></transition>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .slider-fade-enter-active {
    transition: all .3s ease;
  }
  .slider-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slider-fade-enter, .slider-fade-leave-active{
    transform: translateX(-430px);
    opacity: 0;
  }
  .active{color:red}
</style>
