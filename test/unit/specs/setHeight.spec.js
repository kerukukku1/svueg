import Vue from 'vue'
import setHeight from '@/directives/setHeight'

describe('@/index.js', () => {
    it('should render correct contents', () => {
        expect(setHeight.name).toEqual("setHeight")
        expect(setHeight.bind(null)).toBe("NULL")
    })
})
