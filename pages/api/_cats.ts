import { getEnabledCategories } from "trace_events"

import data from './cats.json'
export default  (req : any, res : any) => {
    if(req.query.id){
        
        res.json(data.cats.filter(cat => cat.id == req.query.id))
    }
    else{
        res.json(data)

    }
    
}