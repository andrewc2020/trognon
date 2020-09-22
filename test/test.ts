import hello from './hello';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

import {kittenService} from '../_services/kitten-service'
import {kittenFetcher} from '../components/kittenFetcher'
import { assert } from 'console';
import { KittensDecoder } from '../model/KittensDecoder';
import { Kittens } from '../model/Kittens';
import { Kitten } from '../model/Kitten';








const superagent = require('superagent');






describe('all tests',()=>{
  describe('Hello function', () => {
    it('should return hello world', () => {
      
      const result = hello();
      expect(result).to.equal('Hello World!');
    });
  
  
  describe("decoder tests",()=>{
    let initialEnvVar :string | undefined
    // mocking an environment
    beforeEach(() => {
      initialEnvVar = process.env.RUL
    })
    afterEach(() => {
      process.env.RUL = initialEnvVar
    })

    it('should decode a few kittens', async ()=>{

      
     
      
      await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens)).then(kittens => console.log(kittens)).catch();
      
        
      
    })
  })
    
  
    
  });//end of first describe

});// end of all describes

    




