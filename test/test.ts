import hello from './hello';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';







const superagent = require('superagent');


before(async()=>{
  // Configure chai






  
})




describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello World!');
  });



  

  
});//end of first describe
    




