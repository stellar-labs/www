<template>
  <ul id='slide-out' class='sidenav' @click='clickHandler'>
    <slot/>
  </ul>
</template>
<script>
'use strict'
export default {
  props: {
    closeOnClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    clickHandler() {
      if (this.closeOnClick) {
        M.Sidenav.getInstance(this.$el).close()
      }
    }
  }
}
</script>
<style scoped></style>
