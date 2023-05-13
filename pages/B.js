import React from 'react';
import { useParams } from 'react-router';

export const BPage = () => {
    const params = useParams();
    const { id } = params;
    console.log(id)
    return <div>{id}</div>
}

export default BPage;
