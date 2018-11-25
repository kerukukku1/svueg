import setHeight from '@/directives/setHeight'
import ultraSVG from '@/components/UltraSVG'
import ultraLINE from '@/components/UltraLINE'
import ultraCircle from '@/components/UltraCircle'

/* eslint-disable */

const directives = [
    setHeight
]

const components = [
    ultraSVG,
    ultraLINE,
    ultraCircle
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
