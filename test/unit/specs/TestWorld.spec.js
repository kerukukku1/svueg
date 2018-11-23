import Vue from 'vue'
import TestWorld from '@/components/TestWorld'

describe('TestWorld.vue content', () => {
  it('TestWorld\'s h1 content check', () => {
    const Constructor = Vue.extend(TestWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toEqual('Test App')
  })
})

describe('TestWorld Methods check', function(){
  it('sumOfNumber test', function() {
    const Constructor = Vue.extend(TestWorld)
    const vm = new Constructor().$mount()
    expect(vm.$options.methods.sumOfNumber(1,1)).toBe(2)
  })
})
