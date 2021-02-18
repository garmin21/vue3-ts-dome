<template>
    <teleport to="body">
       <transition name="slide-fade">
            <div class="warpper" v-if="visible" >
                <header class="popup-title">
                    <slot name="header" class="title">
                        <button @click="handleClick" class="close-btn">{{ closeTitle }}</button>
                    </slot>
                </header>
                <section class="popup-body">
                    <slot></slot>
                </section>
                <footer class="popup-footer">

                </footer>
            </div>
       </transition>
    </teleport>
    <div class="mask-layer" v-if="visible"></div>
</template>

<script ts>
import { ref, defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
    name: 'JmModal',
    emits: ['close'],
    props: {
        visible: Boolean,
        closeTitle: String
    },
    setup() {
        const internalInstance = getCurrentInstance()
        const handleClick = () => {
            internalInstance.emit('close')
        }

        return {
            handleClick
        }
    }
})

// 1. 挂在相同节点下不会冲突
// 2. teleport上的class无效
// 3. setup 中 this 不存在
</script>
<style  scoped>
.warpper{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-sizing: border-box;
    margin: auto;
    width: 520px;
    height: 680px;
    border-radius: 15px;
    box-shadow: 0 0 10px #cccccc;
    background-color: white;
    padding: 50px;
}

.mask-layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: rgba(0, 0, 0, .8);
}

/* 可以设置不同的进入和离开动画   */
/* 设置持续时间和动画函数        */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>