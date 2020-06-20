import Vue from 'vue'
import alert from './alert.vue'
let alertConstructor = Vue.extend(alert)
const Message = function (options) {
    return new Promise((resolve, reject) => { // promise封装，ok执行resolve，no执行rejectlet
        options = options || {}
        let instance = new alertConstructor({
            data: options
        })

        instance.$mount()

        document.body.appendChild(instance.$el)

        instance.visible = true

        instance.ok = function () {
            resolve()
            instance.visible = false
        }
        instance.close = function () {
            reject()
            instance.visible = false
        }
    })
}

export default Message
