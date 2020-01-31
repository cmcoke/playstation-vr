import '../styles/styles.css'
import 'picturefill'
import 'lazysizes'
import 'flickity'
import Menu from './modules/Menu'


let menu = new Menu()














// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
