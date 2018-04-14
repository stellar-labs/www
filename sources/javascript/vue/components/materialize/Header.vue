<template>
  <header>
    <div v-if='fixed' class='navbar-fixed'>
      <nav>
        <div class='nav-wrapper'>
          <slot/>
        </div>
      </nav>
    </div>
    <nav v-else>
      <div class='nav-wrapper'>
        <slot/>
      </div>
    </nav>
  </header>
</template>
<script>
'use strict'
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
