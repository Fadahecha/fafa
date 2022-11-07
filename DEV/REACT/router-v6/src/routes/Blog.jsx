import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

    //useSerachParams()
    let [searchParams, setSearchParams] = useSearchParams()



    const url = 'https://jsonplaceholder.typicode.com/posts'
    const {data, error, loading} = useFetch(url)

    if(loading){
        return <h2>Loading...</h2>
    }

    if(error !== ''){
        return <h2>{error}</h2> 
    }

    //handleChange
    const handleChange = (e) => {

        let filter = e.target.value;
        
        if(filter){
            setSearchParams({filter})
        }else{
            setSearchParams({})
        }
    }

  return (
    <div>
        <h1>Blog</h1>

        <input type="text" 
               className='form-control mb-2' 
               value={searchParams.get('filter') || ''}
               onChange={handleChange}
               name='name'
        />

        {

            //filter searchParams()
            data.filter((item) => {

                let filter = searchParams.get('filter')

                if(!filter){
                    return true
                }else{
                    let title = item.title.toLowerCase()
                    return title.startsWith(filter.toLowerCase())
                }

                //map() estaba aparte, filter() retorna un [] que se puede mapear?
            }).map((item) => (
                <h4 key={item.id}>
                    <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                </h4>
            ))
        }
    </div>
  )
}

export default Blog