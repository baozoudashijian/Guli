import Toast from './toast.vue'

// console.log(Toast)

Toast.install = function (Vue, options) {
  Vue.prototype.$toast = function(message, toastOptions) {
    const Constructor = Vue.extend(Toast)
    const toast = new Constructor({
      propsData: toastOptions
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)

  }
}
export  {
  Toast
}