export function loadImages () {
  const imgArr = [
    '/img/mainPage/swooshed/1.jpg',
    '/img/mainPage/swooshed/2.jpg',
    '/img/mainPage/swooshed/3.jpg',
    '/img/mainPage/swooshed/4.jpg',
    '/img/mainPage/swooshed/5.jpg',
    '/img/mainPage/homeAboutBg.png',
    '/img/mainPage/advantage1.png',
    '/img/mainPage/advantage2.png',
    '/img/mainPage/advantage3.png',
    '/img/mainPage/advantage4.png',
    '/img/mainPage/advantage5.png',
    '/img/mainPage/advantage6.png',
    '/img/mainPage/contacts.jpg',
    '/img/apartments/section1.png',
    '/img/apartments/section2.png',
    '/img/apartments/section3.png',
    '/img/apartments/flat1.png',
    '/img/apartments/mini.png',
    '/img/apartments/flat1.png'
  ]
  imgArr.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

function getBodyScrollTop () {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop)
}

export function setScrollUnavailable () {
  const body = document.body
  body.dataset.scrollY = getBodyScrollTop()
  body.style.overflowY = 'scroll'
  body.style.position = 'fixed'
  body.style.top = '0'
  body.style.right = '0'
  body.style.left = '0'
  body.style.bottom = '0'
  body.style.top = `-${document.body.dataset.scrollY}px`
}

export function setScrollAvailable () {
  const body = document.body
  body.style.overflow = 'auto'
  body.style.position = 'relative'
  body.style.top = '0px'
  window.scrollTo(0, document.body.dataset.scrollY)
}
