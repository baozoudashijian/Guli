

const outside = {
  bind: function (el, binding) {
    document.addEventListener('click', function(e) {
      if(el == e.target || el.contains(e.target)) {
        return
      } else {
        binding.value()
      }
    })
  }
}

export {
  outside
}