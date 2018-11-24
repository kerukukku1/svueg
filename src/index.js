import setHeight from '@/directives/setHeight'

/* eslint-disable */

const directives = [
    setHeight
]

const components = [

]

const install = function(Vue, options={}){
    components.forEach(component =>{
        Vue.component(component.name, component)
    })
    directives.forEach(directive =>{
        Vue.directive(directive.name, directive)
    })

}

export default {
    install
}
