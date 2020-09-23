import useSWR from 'swr';
import Link from 'next/link';
import { kittenFetcher } from './kittenFetcher';


export default function KittenList(props : any){
    const { data , error } = useSWR(
        `/api/kittens`,
        kittenFetcher
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