import Layout from '../../components/MyLayout'
import React from 'react'
import {Kitten} from '../../model/Kitten'
import {kittenFetcher} from '../../components/kittenFetcher'
import {KittensDecoder} from '../../model/KittensDecoder'

import useSWR from 'swr';


type ComponentProps = {
  _id: string;
  // Whatever else is needed
}


function KittenPage(props: ComponentProps) : JSX.Element {
  const { data , error } = useSWR(
    `/api/kittens`,
    kittenFetcher
  );
//   let js = [{"_id":"5f65e9fd109cb480b8268bb4","name":"Gerald","mother":2},{"_id":"5f65ea795fa70c8266c3d37f","name":"Geraldine","mother":2},{"_id":"5f65f2117699fb07febd02af","name":"Marmalade","mother":1}];

//  // let kittens = KittensDecoder.decodePromise<Kitten>(data);

  
  let kitten = data[0];
  //let kitten = js[0];

   return (




   <div>
     
      <h1>{kitten?.name}</h1>
   <p>id is {props._id}</p>
      </div>
 


  )
}
  KittenPage.getInitialProps = async function(context: any){
   

    
    const id = context.query.id
    
    
    // const cat = getCat(show.mother)[0]
    
    let thing : ComponentProps = {_id: id}
   
    return {thing};
  }


export default KittenPage