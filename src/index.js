import setHeight from '@/directives/setHeight'
import ultraSVG from '@/components/UltraSVG'

/* eslint-disable */

const directives = [
    setHeight
]

const components = [
    ultraSVG
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
