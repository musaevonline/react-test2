import React from 'react';
import { Button, Box } from '@mui/material';
import { Outlet, useNavigate, useLocation } from "react-router-dom";


export const App = () => {
    const navigate = useNavigate();
    const url = useLocation();

    return <>
        {url.pathname}
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="contained" onClick={() => navigate('/a')}>A</Button>
            <Button variant="contained" onClick={() => navigate('/b')}>B</Button>
            <Button variant="contained" onClick={() => navigate('/a/a1')}>A1</Button>
        </Box>
        <Outlet />
    </>
}

export default App;
