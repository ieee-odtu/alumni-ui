<template>
	<div id="app">
		<app-mobile-menu></app-mobile-menu>
		<app-sidebar-left></app-sidebar-left>
		<app-sidebar-right></app-sidebar-right>

		<div class="pusher">
			<app-menu></app-menu>
			<app-secondary-menu></app-secondary-menu>

			<div class="ui container" id="container">
				<router-view></router-view>
			</div>

			<app-footer></app-footer>
		</div>
	</div>
</template>

<script>
import Menu from './components/menus/Menu.vue';
import MobileMenu from './components/menus/MobileMenu.vue';
import SecondaryMenu from './components/menus/SecondaryMenu.vue';
import SidebarLeft from './components/sidebars/SidebarLeft.vue';
import SidebarRight from './components/sidebars/SidebarRight.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppMenu: Menu,
		AppMobileMenu: MobileMenu,
		AppSidebarLeft: SidebarLeft,
		AppSidebarRight: SidebarRight,
		AppSecondaryMenu: SecondaryMenu,
		AppFooter: Footer,
  }
}
</script>

<style lang="scss">
  @media screen and (max-width: 767px) {
    #main-menu {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    #sidebar-left,
    #sidebar-rights,
    #mobile-menu {
      display: none;
    }
  }
</style>
