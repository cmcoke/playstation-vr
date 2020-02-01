import jump from 'jump.js'

class SmoothScroll {
  constructor() {
    this.home = document.getElementById('home')
    this.about = document.getElementById('about')
    this.design = document.getElementById('design')
    this.accessories = document.getElementById('accessories')
    this.games = document.getElementById('games')
    this.events()
  }

  events() {

    this.home.addEventListener('click', () => {
      jump('.target')
    })

    this.about.addEventListener('click', () => {
      jump('.target2', {
        offset: -80
      })
    })

    this.design.addEventListener('click', () => {
      jump('.target3', {
        offset: -80
      })
    })

    this.accessories.addEventListener('click', () => {
      jump('.target4', {
        offset: -80
      })
    })

    this.games.addEventListener('click', () => {
      jump('.target5', {
        offset: -100
      })
    })

  }



}




export default SmoothScroll
