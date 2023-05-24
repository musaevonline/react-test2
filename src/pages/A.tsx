import React, { useRef } from 'react';
import { Outlet } from 'react-router';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';

export interface IData {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const APage = () => {
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement>(null);

    return <div>
        <input ref={ref} />
        <button onClick={() => navigate(`/b/${ref.current.value}`)}>GO</button>
        <Outlet />
    </div>
}

export default APage;
