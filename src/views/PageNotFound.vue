<template>
	<div>
		Страница не найдена
        <router-link :to="taskList">Перейти на главную</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			taskList: {
                name: "TaskListView"
            },
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
