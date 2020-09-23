import { JsonDecoder } from 'ts.data.json';
import { Kitten } from './Kitten';

export const KittenDecoder = JsonDecoder.object<Kitten>({
  _id: JsonDecoder.string,
  name: JsonDecoder.string,
  mother: JsonDecoder.number
},
  "KittenDecoder"
);
