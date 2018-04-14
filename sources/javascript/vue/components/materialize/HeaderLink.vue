<template>
  <li>
    <router-link :to='to'>
      <i v-if='icon' v-text='icon' class='material-icons left'></i>
      <slot/>
    </router-link>
  </li>
</template>
<script>
'use strict'
export default {
  props: {
    to: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
