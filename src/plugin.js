import Toast from './toast.vue'

// console.log(Toast)
let div = document.createElement('div')
Toast.install = function (Vue, options) {
  Vue.prototype.$toast = function(message, toastOptions) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
      propsData: toastOptions
    })
    toast.$slots.default = [message]
    toast.$mount()
    div.style.position = "fixed"
    div.style.top = "8px"
    div.style.left = "50%"
    div.appendChild(toast.$el)
    document.body.appendChild(div)
  }
}
export  {
  Toast
}