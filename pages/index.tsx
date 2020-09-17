
import Head from 'next/head'

import React from 'react';
import {GetServerSideProps } from 'next';



type Props ={
  name:string
}

const Home : React.FunctionComponent<Props> = ({name}) =>(
  <div>
    <p>
      HELLO {name}!
    </p>
  </div>
)

export default Home

export const getServerSideProps : GetServerSideProps<Props>= async ({query}:any) => {
   const name = query.name instanceof Array?query.name.join(',  '):query.name
  return {
    props:{
      name:query.name || "World",
    }
  }
}
