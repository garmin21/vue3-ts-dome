<template>
    <div class="app">
        <h1>这里是一个手动搭建的vussss</h1>
        <button>{{ count }}</button>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'app',
    setup() {
        const count = ref(0);

        return {
            count 
        }
    }
}
</script>

<style lang="less" scoped></style>