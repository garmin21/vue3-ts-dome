<template>
    <button @click="visible = !visible">按钮组件</button>
    <div class="example">
        <JmModal :closeTitle="'关闭'" :visible="visible" @close="close">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea perferendis cum ratione iste saepe ab? Exercitationem dicta quia nostrum architecto ab eos, 
            doloribus earum labore alias repellat quidem rerum possimus.
        </JmModal>
    </div>
</template>

<script ts>
import { ref } from 'vue';
import JmModal from '../package/modal/index'
export default {
    name: 'Index',
    components: {
        JmModal
    },
    setup() {
       const visible = ref(false);

       /**
        * 关闭弹窗
        */
       const close = () => {
           visible.value = false;
       }
        return {
            visible,
            close 
        }
    }
}
</script>
<style lang="less" scoped>

</style>