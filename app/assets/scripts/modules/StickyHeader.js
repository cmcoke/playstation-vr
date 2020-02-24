import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'


class SitckyHeader {
  constructor() {
    this.header = document.querySelector('.header')
    this.events()
  }

  events() {
    window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200))
  }

  // add bottom border line on the header
  runOnScroll() {

    if (window.scrollY > 60) {
      this.header.classList.add('header--bottom-line')
    } else {
      this.header.classList.remove('header--bottom-line')
    }

  }


}


export default SitckyHeader
