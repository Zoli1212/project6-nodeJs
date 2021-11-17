import React from 'react'

import { useParams} from 'react-router-dom'

import { useSuperHeroData } from './hooks/useSuperHeroData'

export const RQSuperHero = () => {

    const { heroId} = useParams()

    const { data, isLoading, isError, error } = useSuperHeroData(heroId)


    if(isLoading){
        return <h2>Loading...</h2>
    }


    return (
        <div>
            
        </div>
    )
}
