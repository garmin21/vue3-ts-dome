<template>
    <div 
        v-show="visible"
        :class="{
            'jm-modal-core',
            'active',
            [`jm-model-index-${index}`]: index > 0
        }" 
        :style="{zIndex: 1000 + index}"
        >
    </div>
</template>


<script lang='ts'>
import { 
    ref, 
    defineComponent, 
    getCurrentInstance, 
    watch 
} from 'vue';

const COUNT_INDEX = 0;

export default defineComponent({
    name: 'JmCore',
    props: {
        visible:{
            type: Boolean,
            required: true
        },
    },
    setup(props) {
        const internalInstance = getCurrentInstance();
        const index = ref(COUNT_INDEX);


        // watch
        watch(() => props.visible, (visible, prevVisible) => {
            console.log(visible)
        })

        return {
            index
        }
    }
})


</script>
<style scoped>
.jm-modal-core{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: auto;
    -webkit-tap-highlight-color: transparent;
}
.jm-modal-core.active{
    background: rgba(0, 0, 0, 0.5);
}
</style>