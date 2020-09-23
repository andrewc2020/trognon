import { expect } from 'chai';
import Home from './Home'



describe("all tests",()=>{
    it('should find a tag on the component',()=>{
        const wrapper = shallow(<Home/>);
    expect(wrapper.find(Home)).to.have.length(0);

    })
})