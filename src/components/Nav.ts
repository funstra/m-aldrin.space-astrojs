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
        document.addEventListener('click', clickOutside, true)
    }
})