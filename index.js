import { Button } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#lalala'));
root.render(
    <Button variant="contained">Hello World</Button>
)