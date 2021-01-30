<template>
    <div class="example">
        <button @click="pus">+1</button>
        {{ count }}
    </div>
</template>

<script ts>
import { ref } from 'vue';
export default {
    name: 'Index',
    setup() {
        const count = ref(0);

        const pus = () => {
            count.value++
        }

        return {
            count,
            pus 
        }
    }
}
</script>
<style lang="less" scoped>

</style>