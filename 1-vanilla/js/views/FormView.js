import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()

    return this
}

// Event Binder
FormView.bindEvents = function() {
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

// Custom Functions
FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

// key 입력 이벤트를 여기서 처리 중
// keydown, press 등과 중복될 것
FormView.onKeyup = function(e) {
    // Enter key 외의 이벤트 처리
    // Enter Key Code
    const enterKey = 13
    this.showResetBtn(this.inputEl.value.length)
    if (e.keyCode !== enterKey) return

    // Enter Key의 이벤트 처리
    this.emit('@submit', { input: this.inputEl.value })
}

export default FormView