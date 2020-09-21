// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {kittenService} from '../../_services/kitten-service'
import { JsonDecoder } from 'ts.data.json';
import { Kitten } from '../../model/Kitten';
import { Kittens } from '../../model/Kittens';

import { KittensDecoder } from '../../model/KittensDecoder';



export default  async (req : any, res : any) => {

  if(req.query.mother)
  {
    await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens )).then(kittens => res.status(200).json(kittens.filter(kitten => kitten.mother == req.query.mother))).catch();
  }
  else if(req.query.id){

    await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens )).then(kittens => res.status(200).json(kittens.filter(kitten => kitten._id == req.query.id))).catch();

  }
  else
  {
    await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens )).then(kittens => res.status(200).json(kittens)).catch();

  }
  
  
    
    
    
}

