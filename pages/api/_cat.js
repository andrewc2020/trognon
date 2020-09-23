import data from './cats.json'


function getCat(id){

    

    return data.cats.filter(cat => cat.id == id)
}

export default getCat