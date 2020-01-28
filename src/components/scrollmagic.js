const ScrollMagic = function({ trigger, hook = 0.5 }) {
  this.windowHeight = window.innerHeight

  if (hook <= 1 && hook >= 0) {
    this.hook = hook * 100
    this.hook = (this.windowHeight * this.hook) / 100
  } else {
    console.warn(`Hook expects value to be 0 to 1, ${hook} given`)
  }

  if (typeof trigger === "object") {
    this.trigger = trigger
  } else {
    console.warn(
      `Trigger expects value to be HTMLElement object, ${typeof trigger} given`
    )
  }
}

ScrollMagic.prototype.init = function() {
  console.log(this.trigger.getBoundingClientRect().y)
  if (this.trigger.getBoundingClientRect().y <= this.hook) {
    console.log(this.trigger.getBoundingClientRect().y)
    this.inCallback()
  }

  if (this.trigger.getBoundingClientRect().y > this.hook) {
    if (this.outCallback) {
      this.outCallback()
    }
  }
}

ScrollMagic.prototype.on = function(inCallback, outCallback = null) {
  const that = this
  this.inCallback = inCallback
  this.outCallback = outCallback

  //   function init(trigger) {
  //     console.log(that.trigger.getBoundingClientRect().y)
  //     if (trigger <= that.hook) {
  //         that.inCallback()
  //     }

  //     if (trigger > that.hook) {
  //         if(that.outCallback) {
  //             that.outCallback()
  //         }
  //     }
  //   }
  this.init(this.trigger.getBoundingClientRect().y)

  window.addEventListener("scroll", function() {
    that.init(that.trigger.getBoundingClientRect().y)
  })
}

export default ScrollMagic
