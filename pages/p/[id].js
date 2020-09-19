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
    const data = getKitten(context.query.id)
    

    
    
    
    const show = data[0];
    const cat = getCat(show.mother)[0]
    
   
    return {show, cat};
  }


export default Kitten



  

