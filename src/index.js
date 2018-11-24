/* eslint-disable */

const components = [

]

const install = function(Vue, options={}){
    components.forEach(component =>{
        Vue.component(component.name, component)
    })
}
module.exports = {
    install
}

export default module.exports
