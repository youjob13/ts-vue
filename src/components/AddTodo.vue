<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title:'',
        }
    },
    methods: {
        onSubmit() {
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed:false,
                }
                this.$emit('add-todo', newTodo);
                this.title = '';
            }
        }
    }
}
</script>

<style scoped>
    form {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
        width: 350px;
        padding: 0.4rem 1rem;
    }
    button {
        text-transform: uppercase;
        padding: 0.4rem 1rem;
        font-weight: bold;
    }
</style>