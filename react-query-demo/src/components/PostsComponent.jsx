import React from 'react';
import { useQuery } from 'react-query';

function PostsComponent () {
    const { data, error, isLoading, isFetching}= useQuery('post', ()=> 
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
         res.json()
        ), {
        cacheTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
        keepPreviousData: true,
       }
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div> Error: {error.message}</div>;
    }

    return (
        <div>
            {isFetching&& <div>Updating...</div>}
                {data.map( post => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>

                ))}
            
        </div>
    );
};

export default PostsComponent;