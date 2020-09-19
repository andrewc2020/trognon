import data from './kittens.json'
function getKitten(id){
return data.kittens.filter(kitten => kitten._id === id)
}
export default getKitten