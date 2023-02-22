import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

 import Sam from './App';
let X= Sam
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    
    <X/>
  </StrictMode>
);
