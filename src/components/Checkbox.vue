<template>
	<label>
        <input type="checkbox" :class="`checkbox-default ${isUser && 'user'}`" :name="name" :value="value"/> {{ label }}
    </label>
</template>

<script>
	export default {
		props: ['name', 'value', 'label', 'isUser']
	}
</script>

<style lang="scss" scoped>
 @import '../scss/vars.scss';
	input[type="checkbox"] {
        appearance: none;
        width: 12.8px;
        height: 12.8px;
    }

    .checkbox-default {
        background-color: $white;
        border: 1px solid $text-color;
        border-radius: 5px;

        &:hover {
            background-color: $white;
            border: 1px solid $primary;
            border-radius: 5px;
        }

        &:checked {
            background-color: $primary;
            border: 1px solid $primary;
            border-radius: 5px;
            background: center url("../assets/images/x.svg");
            background-blend-mode: color-dodge;
            background-size: cover;
        }
	}
</style>