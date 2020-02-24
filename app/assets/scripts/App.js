import '../styles/styles.css'
import 'picturefill'
import 'lazysizes'
import 'flickity'
import Menu from './modules/Menu'
import SmoothScroll from './modules/SmoothScroll'
import StickyHeader from './modules/StickyHeader'

let menu = new Menu()
let smoothScroll = new SmoothScroll();
let stickyHeader = new StickyHeader();













// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
