import { VNode } from 'vue'

function log() {
    /**
     * @param target 对应 methods 这个对象
     * @param name 对应属性方法的名称
     * @param descriptor 对应属性方法的修饰符
     */
    return function(target:VNode, name:string, descriptor:any) {
      console.log(target, name, descriptor)
      const fn = descriptor.value
    //   descriptor.value = function(...rest) {
    //     console.log(`这是调用方法【${name}】前打印的日志`)
    //     fn.call(this, ...rest)
    //     console.log(`这是调用方法【${name}】后打印的日志`)
    //   }
    }
  }
  