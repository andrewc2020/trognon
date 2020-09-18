
import Head from 'next/head'

import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import KittenList  from '../components/KittensList';



type Props = { name : string }


const Home : React.FunctionComponent<Props> = ({ name }) =>(
  <div>
    
      <div>
      <KittenList />
      </div>
      
    
  </div>
)

export default Home

export const getServerSideProps : GetServerSideProps<Props, ParsedUrlQuery> = async ({query}) => {
   const name = query.name instanceof Array?query.name.join(','):query.name
   return{
    props:{
      name : name || "World"
    }

   }
  
    
  }

