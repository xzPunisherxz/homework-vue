<template>
	<div class="dropdown-wrapper">
		ListView
		{{color}}
		<input v-model="storeText" placeholder="Hello" />
		<router-view></router-view>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	inheritAttrs: false,
	data() {
		return {
			text1: ''
		}
	},
	props: {
		color: String,
	},
	
	computed: {
		...mapGetters('app1', ['activeTab', 'filters', 'getCurrentFilter']),
		href() {
			return `#dropdown-icon`
		},
		storeText: {
			get() {
				return this.getCurrentFilter || null
			},
			set(val) {
				this.setFilters(val)
			} 
		}
	},
	mounted() {
		this.setActiveTab(this.$route.fullPath)
	},
	methods: {
		...mapActions('app1', ['setActiveTab', 'setFilters']),
		toggle() {
			this.isActive = !this.isActive;
		}
	},
}
</script>

<style lang="scss" scoped>
	.dropdown {
		&-wrapper {
			position: relative;
		}
		&-button {
			border: 1px solid black;

			&.-active {
				border-color: red;
			}
		}
		&-menu {
			position: absolute;
			right: 0px;
			left: 0px;
			border: 1px solid black;

			&-item {
				border-bottom: 1px solid black;
			}
		}
	}

</style>
