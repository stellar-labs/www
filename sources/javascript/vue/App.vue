<template>
  <div>
    <materialize-header>
      <materialize-header-title>Stellar Labs</materialize-header-title>
    </materialize-header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    </footer>
  </div>
</template>
<script>
'use strict'
import MaterializeHeader from './components/materialize/Header.vue'
import MaterializeHeaderTitle from './components/materialize/HeaderTitle.vue'
export default {
  components: {
    MaterializeHeader,
    MaterializeHeaderTitle
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
