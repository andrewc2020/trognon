import Layout from '../../components/MyLayout'
import { NextPage, NextPageContext } from 'next';
import React from 'react'
import {Kitten} from '../../model/Kitten'
import {kittenFetcher} from '../../components/kittenFetcher'
import {KittensDecoder} from '../../model/KittensDecoder'
import getCat from '../api/_cat'

import useSWR from 'swr';


interface Props {
  kitten_id?: string;
}


const KittenPage=  ({ kitten_id}:Props) : JSX.Element => {

  const { data , error } = useSWR(
    `/api/kittens?id=${kitten_id}`,
    kittenFetcher
  );


let kitten : Kitten = {_id : "1", name: "noname", mother:2} 
if(data && data.length >0){
    kitten = data[0];
  };

  const cat = getCat(kitten.mother)[0]

 

   return (




   <div>
     <Layout>
      <h1>{kitten?.name}</h1>
      
      <main>kitten id is : {kitten_id}</main>
   <p>mother is {cat.name} </p>
     
      </Layout>
      </div>
 


  )
}
  KittenPage.getInitialProps = async function({query}: any){
   
    const kitten_id  = query ? query.id: 1
    
  return { kitten_id }

    
  }


export default KittenPage