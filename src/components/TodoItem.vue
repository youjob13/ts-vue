<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input v-on:change="todo.completed = !todo.completed" type="checkbox">
            <strong>{{index + 1}}</strong>
            {{todo.title}}
        </span>
        <button v-on:click="$emit('remove-todo', todo.id)" class="btn">&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type:Object,
            required:true,
        },
        index: Number
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #bbb;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 2rem;
        margin-bottom: 1rem;
    }
    .btn {
        background: black;
        color:#fff;
        font-size: 20px;
        padding: 5px;
    }
    .done {
        text-decoration: line-through;
    }
</style>