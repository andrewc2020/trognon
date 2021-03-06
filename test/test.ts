
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line

import 'mocha';
//services
import {kittenService} from '../_services/kitten-service'

import { KittensDecoder } from '../model/KittensDecoder';
import { Kittens } from '../model/Kittens';
import { Kitten } from '../model/Kitten';
import { Mock } from "moq.ts";
import useSWR from 'swr';
import {kittenFetcher} from '../components/kittenFetcher';








const superagent = require('superagent');






describe('all tests',()=>{
  
  
  
  describe("decoder tests",()=>{
    let initialEnvVar :string | undefined
    // mocking an environment
    beforeEach(() => {
      initialEnvVar = process.env.REST_URL
    })
    afterEach(() => {
      process.env.REST_URL = initialEnvVar
    })

    it('should decode a few kittens', async ()=>{

      
     
      
      await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens)).then(kittens => console.log(kittens)).catch();
      
        
      
    })
    
  }); // end of first describe
    
  describe('mock tests',()=>{
    it('should run a mock test',()=>{
      const mock = new Mock<(args: number[]) => number>()
    .setup(instance => instance([2, 1]))
    .returns(2);
 
const object = mock.object();
 
const actual = object([2, 1]);
 
// since the default comparisons logic sees [2, 1] and [2, 1] as different objects the provided setup would not work
expect(actual).to.equal(undefined);

  })//end of first mock test

    })//end of mock tests 
  
    
 

});// end of all describes

    




