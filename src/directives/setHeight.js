/* eslint-disable */

export default {
    name: 'setHeight',
    bind: (el, bindArg) => {
        el.style.backgroundColor = bindArg.value
        console.log(bindArg)
    }
}