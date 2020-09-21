import hello from './hello';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';


const superagent = require('superagent');







describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello World!');
  });

  describe('http requests with superagent',()=>{
    it('should retrieve cats',()=>{
      
      (async () => {
        try {
          const res = await superagent.get('127.0.0.1:8000/api/kittens');
          console.log(res);
        } catch (err) {
          console.error(err);
        }
      })();

    })
  })

  

  
});
    




