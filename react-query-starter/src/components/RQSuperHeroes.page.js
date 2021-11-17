import { useQuery } from "react-query"
import axios from 'axios'
import { useState} from 'react'
import { Link} from 'react-router-dom'

import { useSuperHeroesData } from "./hooks/useSuperHeroesData"



export const RQSuperHeroesPage = () => {

  const [ enabled, setEnabled] = useState(false)


  const onSuccess = data =>{
    console.log('Success', data)
  }
  const onError =  error =>{
    console.log('Error', error)
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError, enabled)

  console.log('loading*: ', isLoading, 'fetching:', isFetching)
 if(isLoading){
   return <h2>Loading...</h2>
 }

 if(isError){
   return <h2>{ error.message} </h2>

 }



  return (
  <>
  <h2>{

    data?.data.map((hero) =>{
      return <div key={hero.name}>
        
        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
    })


}</h2>
<button onClick={() => setEnabled(!enabled)}>Click Me</button>
  </>
  )}
