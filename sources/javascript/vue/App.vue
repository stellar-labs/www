<template>
  <div>
    <materialize-menu-links close-on-click>
      <materialize-menu-link icon='home'>Home</materialize-menu-link>
      <materialize-menu-link to='/about' icon='info'>About</materialize-menu-link>
    </materialize-menu-links>
    <materialize-header>
      <materialize-header-title>Stellar Labs</materialize-header-title>
      <materialize-menu-trigger />
      <materialize-header-links>
        <materialize-header-link icon='home'>Home</materialize-header-link>
        <materialize-header-link to='/about' icon='info'>About</materialize-header-link>
      </materialize-header-links>
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
import MaterializeHeaderLinks from './components/materialize/HeaderLinks.vue'
import MaterializeHeaderLink from './components/materialize/HeaderLink.vue'
import MaterializeMenuLinks from './components/materialize/MenuLinks.vue'
import MaterializeMenuLink from './components/materialize/MenuLink.vue'
import MaterializeMenuTrigger from './components/materialize/MenuTrigger.vue'
export default {
  components: {
    MaterializeHeader,
    MaterializeHeaderTitle,
    MaterializeHeaderLinks,
    MaterializeHeaderLink,
    MaterializeMenuLinks,
    MaterializeMenuLink,
    MaterializeMenuTrigger
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
