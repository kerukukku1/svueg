/* eslint-disable */
const clickPlugin = {
    install(Vue, options={}){
        Vue.directive('svg-click', {
            bind : function(element) {
                element.addEventListener('click', function(){
                    console.log("click!")
                }, false)
            }
        })
    }
}

export default clickPlugin
