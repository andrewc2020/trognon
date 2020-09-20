// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {kittenService} from '../../_services/kitten-service'
import { JsonDecoder } from 'ts.data.json';
type Kitten = {
  _id: string,
  name: string,
  mother : number
}
type Kittens = Array<Kitten>;

const KittenDecoder = JsonDecoder.object<Kitten>({
  _id: JsonDecoder.string,
  name : JsonDecoder.string,
  mother : JsonDecoder.number
},
"KittenDecoder"
)

let KittensDecoder = JsonDecoder.array<Kitten>(KittenDecoder, 'KittensDecoder');
// let my_data = data.kittens.filter(kitten => kitten.mother == req.query.id)
    
//     res.status(200).json(my_data)


export default  async (req : any, res : any) => {

  if(req.query.id)
  {
    await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens )).then(kittens => res.status(200).json(kittens.filter(kitten => kitten.mother == req.query.id))).catch();
  }
  else
  {
    await kittenService.getAll().then<Kittens,never>(result => KittensDecoder.decodePromise<Kitten>(result.kittens )).then(kittens => res.status(200).json(kittens)).catch();

  }
  
  
    
    
    
}
