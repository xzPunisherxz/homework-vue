<template>
	<div class="app">
		<div class="wrap">
			<Button text="Кнопка" additionalClass="btn-primary"></Button>
		</div>
		<Input placeholder="Введите текст"/>
		<Input placeholder="Введите текст" disabled/>
		<div class="wrap">
			<Textarea placeholder="Введите текст"></Textarea>
		</div>
		<div class="wrap">
			<Textarea placeholder="Введите текст" disabled></Textarea>
		</div>
		<div class="wrap">
			<Paging></Paging>
		</div>
		<div class="wrap-flex">
			<Dropdown :arr="arr">
			</Dropdown>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			arr: ["task 1", "task 2", ]
		}
	},

	
	computed: {

	},
	methods: {
	
	},
}
</script>

<style lang="scss">
	@import "@/scss/_fonts";
	.app{
		font-family: "Roboto", Arial, sans-serif;
		padding: 30px;
		width: 580px;
		background-color: $basic-white;
		margin: 30px auto;
	}

	.wrap {
		margin-bottom: 20px;
	}

	.wrap-flex {
		display: flex;
		gap: 20px;
	}
</style>
