import { expect } from 'chai';

let mochaAsync = (fn) => {
    return async (done) => {
        try {
            await fn();
            done();
        } catch (err) {
            done(err);
        }
    };
};
let someAsyncMethodToTest = async () =>{
    
    
}
describe('async tests',()=>{

    // it("Sample async/await mocha test using wrapper", mochaAsync(async () => {
    //     var x = await someAsyncMethodToTest();
    //     expect(x).to.equal(true);
    // }));
    it('should pass',()=>{
        let one = 1;
        expect(one).to.equal(1);
    })

    it("Using a Promise with async/await that resolves successfully with wrong expectation!", async function() {
        var testPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve("Hello!");
            }, 200);
        });
    
        var result = await testPromise;
    
        expect(result).to.equal("Hello!");
    });

    

})