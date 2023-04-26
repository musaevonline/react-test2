import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#lalala'));
root.render(<h1><div>123</div></h1>)

// function MyComponent() {
//     return React.createElement('div', undefined, '123');
// }

// root.render(React.createElement('h1', undefined,
//     React.createElement(MyComponent)
// ))
