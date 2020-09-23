import { JsonDecoder } from 'ts.data.json';
import { Kitten } from './Kitten';
import { KittenDecoder } from './KittenDecoder';

export let KittensDecoder = JsonDecoder.array<Kitten>(KittenDecoder, 'KittensDecoder');
