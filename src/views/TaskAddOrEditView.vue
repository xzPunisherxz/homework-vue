<template>
    <form @submit="handleSubmit">
		<CardHeader>
            <h3 class="header-caption">Создание</h3>
			<div class="caption__button-inner">
				<Button type="submit" class="primary-button">Сохранить</Button>
				<Button class="default-button" @click="$router.go(-1)">Отмена</Button>
			</div>
		</CardHeader>

	    <section class="task__list">
            <div class="task__list-inner">
            <div class="task-window">
            <div class="user-col">

            <Select label="Исполнитель" v-model="task.assignedId" :users="allUsers"></Select>

			<Select label="Тип запроса" v-model="task.type" :optionsArray="[
				{text: 'Задача', value: 'task'},
				{text: 'Ошибка', value: 'bug'},
			]">
			</Select>

			<Select label="Приоритет" v-model="task.rank" :optionsArray="[
				{text: 'Низкий', value: 'low'},
				{text: 'Средний', value: 'medium'},
				{text: 'Высокий', value: 'high'}
			]">
			</Select>


            </div>
            <div class="line"></div>

            <div class="text-col">
            <div class="task-inner"> 
            <p class="task-label">Название</p>

            <div class="dropdown__input">
                    <input 
                        :class="`dropdown__input-input ${!task.title ? 'input__empty' : 'input__default'}`"
                        type="text" 
                        placeholder="Название задачи"
                        name="title"
                        v-model="task.title"
                        required
                    />
            </div>
            </div>

                <div class="task-inner"> 
                    <p class="task-label">Описание</p>
                        <textarea 
                            :class="`edit__textarea ${!task.description ? 'input__empty' : 'input__default'}`"
                            name="description"
                            v-model="task.description"
                            required
                        ></textarea>
                </div>
            </div>
                <div class="comment-col">

                </div>

            </div>
            </div>
            </section>
        </form>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from 'vuex';
import api from '@/api'
import Button from "../components/Button.vue";
import Select from "../components/Select.vue";

export default {
	data() {
		return {
            user: JSON.parse(localStorage.getItem('user')),
            task: Object.assign({}, Object.freeze({
                assignedId: '',
                type: '',
                rank: '',
                title: '',
                description: ''
            }))
		}
	},
    props: {
		id: String
	},
    computed: {
		...mapGetters(['allUsers']),
	},
    mounted() {
        this.fetchAllUsers();
        if (this.$route.query.userId) {
            this.task.assignedId = this.$route.query.userId;
        }
    },
    created() {
        if (this.$props.id) {
            api.Tasks.getTask(this.$props.id).then(({data}) => {
                this.task = data;
            });
        }
    },
    methods: {
        ...mapActions(['fetchAllUsers']),
        handleSubmit(e) {
            e.preventDefault();

            const data = {
                id: this.task.id ? this.task.id : '',
                userId: this.user.data.id,
                assignedId: this.task.assignedId,
                title: this.task.title,
                description: this.task.description,
                type: this.task.type,
                rank: this.task.rank,
                dateOfCreation: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss'),
                dateOfUpdate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss'),
                status: "opened",
                timeInMinutes: 0,
            }

            api.Tasks.createOrEditTask(data).then(({data}) => {
                this.$router.push({name: "TaskView", params: {id: data.id}});
            })
        }
    },
	components: { Button, Select }
}
</script>

<style lang="scss" scoped>
  @import '../scss/vars.scss';
  @import '../scss/_mixins.scss';
  @import '../scss/components/buttons.scss';
  @import '../scss/components/task.scss';
  @import '../scss/components/task-list.scss';
  @import '../scss/components/task-form.scss';
  @import '../scss/components/user-page.scss';
</style>
