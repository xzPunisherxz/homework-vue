<template>
	<div class="dropdown-wrapper" :class="additionalClass">
		<div class="input-list">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			
		}
	},

	props: {
		"additionalClass": {
			type: String
		}
	},
}
</script>

<style lang="scss">

.dropdown-wrapper {
	width: calc(100% + 10px);
	position: absolute;
	border-radius: 3px;
	background-color: $basic-white;
	top: -5px;
	left: -5px;
	z-index: 2;
	display: none;

	&-show {
		border: 1px solid $primary;
		box-shadow: 0px 0px 2px 2px rgba($primary, 0.5);
		padding: 32px 0 2px 0;
		display: block;
	}
}

.input {
	&-list {
		max-height: 200px;
		overflow: auto;
		@include scroll-style;
	}
}
</style>