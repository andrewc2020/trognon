import {kittenService}  from '../../_services/kitten-service'



export default (req, res) => {
    res.statusCode = 200
    
    kittenService.getAll().then(kittens => res.json(kittens))
    
    
    
    
  }


