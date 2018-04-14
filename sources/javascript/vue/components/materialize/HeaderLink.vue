<template>
  <li>
    <router-link :to='to'>
      <i v-if='icon' v-text='icon' class='material-icons left'></i>
      <span v-if='text' v-text='text'/>
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
    },
    text: {
      type: String,
      default: undefined
    },
    icon: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
