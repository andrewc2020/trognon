import { Kitten } from '../model/Kitten';
import { Kittens } from '../model/Kittens';
import { KittensDecoder } from '../model/KittensDecoder';

export async function kittenFetcher(url: string): Promise<Kittens> {

  let result = await fetch(url).then(r => r.json());
  return await KittensDecoder.decodePromise<Kitten>(result);
}
