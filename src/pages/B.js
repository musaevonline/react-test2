import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query'

const asdf = ({id}) => {
    console.log('call')
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id || 1}`).then(response => response.json())
}

export const BPage = () => {
    const params = useParams();
    const { id } = params;
    const { data, isLoading } = useQuery(['key', id], () => asdf({id}))

    if (isLoading) return 'Loading'; 

    return <div>{JSON.stringify(data)}</div>
}

export default BPage;
