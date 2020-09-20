import useSWR from 'swr';
import Link from 'next/link';
import { JsonDecoder } from 'ts.data.json';



type Kitten = {
  _id: string,
  name: string,
  mother: number
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


async function fetcher(url: string) : Promise<Kittens> {

  let result = await fetch(url).then(r => r.json());
  return await KittensDecoder.decodePromise<Kitten>(result);
}
export default function KittenList(props : any){
    const { data , error } = useSWR(
        `/api/kittens`,
        fetcher
      );
      
    return(
        <div>
        <h2>Kittens</h2>
       
        <ul>
      {data && data && data.map(kitten => (
        <li key={kitten._id}>
          <Link href="/p/[id]" as={`/p/${kitten._id}`}>
            <a>{kitten.name}</a>
          </Link>
          
        </li>
      ))}
    </ul>

        </div>
    )
}