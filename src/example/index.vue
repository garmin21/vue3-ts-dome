<template>
    <button @click="openScreenShort">打开截图工具</button>
</template>

<script ts>
import { ref } from 'vue';
import ScreenShort from "js-web-screen-shot";
export default {
    name: 'Index',
    setup() {
       const visible = ref(false);

       /**
        * 关闭弹窗
        */
       const close = () => {
           visible.value = false;
       }
       
       /**
        * 打开截图工具
        */
        const openScreenShort = () => {
            new ScreenShort();
        }
        return {
            visible,
            close,
            openScreenShort
        }
    }
}
</script>
<style lang="less" scoped>

</style>