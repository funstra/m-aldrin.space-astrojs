const nav = document.querySelector('nav')
document.addEventListener('rooting', e => {
    const link = nav.querySelector(`a[href="${location.pathname}"]`)
    if (link) {
        link.classList.add('navigating-to')
    }
})
document.addEventListener('navigating-done', e => {
    nav.querySelector('[aria-current="page"]')?.removeAttribute('aria-current')
    nav.querySelector('.navigating-to')?.setAttribute('aria-current', 'page')
    nav.querySelector('.navigating-to')?.classList.remove('navigating-to')
})

let d = 0
document.addEventListener('rooter:fetching-start', e => {
    nav.dataset.state = 'fetching'
    d = Date.now()
})
document.addEventListener('rooter:fetching-done', e => {
    if (Date.now() - d < 125) {
        nav.dataset.state = 'idle'
    } else {
        nav.dataset.state = 'done'
        nav.querySelector('.links').addEventListener('transitionend', e => {
            nav.dataset.state = 'idle'
        }, { once: true })
    }
})
const btn = nav.querySelector('button')
function clickOutside(e) {
    console.log(e.composedPath().includes(nav));
    if (!e.composedPath().includes(nav)) {
        nav.querySelector('.links').dataset.state = 'closed'
        document.removeEventListener('click', clickOutside, true)
    }
}
btn.addEventListener('click', e => {
    const _state = nav.querySelector('.links').dataset.state
    nav.querySelector('.links').dataset.state = _state == 'open' ? 'closed' : 'open'
    if (_state == 'closed') {
        document.addEventListener('pointerdown', clickOutside, true)
    }
})

export default {}