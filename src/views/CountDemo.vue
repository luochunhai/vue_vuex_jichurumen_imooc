<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>count: {{count}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import store from '../store'
    @Options({
        components: {},
    })
    export default class About extends Vue {

        get count() {
            return store.state.count
        }

        increment() {
            store.commit('incrementCount')
        }
    }
</script>