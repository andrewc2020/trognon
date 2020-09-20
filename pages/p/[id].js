import Layout from '../../components/MyLayout'
import getKitten from '../api/_kitten'
import getCat from '../api/_cat';
import Link from 'next/link';



const Kitten = props => (

  
 

  <Layout>
    <h1>{props.show && props.show.name}</h1>
    <h3>Mother :  <Link href="/cats/[id]" as={`/cats/${props.cat.id}`}>
            <a>{props.cat.name}</a>
          </Link> </h3>
    
    
  </Layout>)
  Kitten.getInitialProps = async function(context){
    //const kitten = getKitten(context.query.id)
    const data = fetch(`/api/kittens?id=${context.query.id}`)
   
    
    

    
    
    
    const kitten = data[0];
    const cat = getCat(kitten.mother)[0]
    
   
    return {kitten, cat};
  }


export default Kitten



  

