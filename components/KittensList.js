import useSWR from 'swr';
import Link from 'next/link';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}
export default function KittenList(props){
    const { data, error } = useSWR(
        `/api/kittens`,
        fetcher
      );
      
    return(
        <div>
        <h2>Kittens</h2>
       
        <ul>
      {data && data && data.kittens.map(kitten => (
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