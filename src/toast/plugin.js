import Toast from './toast.vue'

// console.log(Toast)
// createContainer
let div = document.createElement('div')
div.style.position = "fixed"
div.style.top = "8px"
div.style.left = "50%"
document.body.appendChild(div)

Toast.install = function (Vue, options) {
  Vue.prototype.$toast = function(message, toastOptions) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
      propsData: toastOptions
    })
    toast.$slots.default = [message]
    toast.$mount()
    div.appendChild(toast.$el)

  }
}
export  {
  Toast
}