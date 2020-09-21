

import getCat from '../pages/api/_cat';
import Link from 'next/link';
import {kittenFetcher} from './kittenFetcher'
import useSWR from 'swr';
import { Kittens } from '../model/Kittens';



export default function Kitten(props : any){
  
  return(
   <div>
    <h1>{props.kitten && props.kitten.name}</h1>
    {/* <h3>Mother :  <Link href="/cats/[id]" as={`/cats/${props.cat.id}`}>
            <a>{props.cat.name}</a>
          </Link> </h3> */}
  </div>
)
}

Kitten.getServerSideProps = async function(context: any){
   
  const { data , error } = useSWR<Kittens>(
    `/api/kittens?id=${context.query.id}`,
    kittenFetcher
  );
 
  
  
 
  return {kitten: data[0]};
}

  
 

  


