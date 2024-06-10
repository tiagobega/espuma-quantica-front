import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/global.scss';

// function updateRootStyle() {
//   if (window.innerWidth >= 1400) {
//     document.documentElement.style.setProperty(
//       '--layoutWidth',
//       `${window.innerWidth}`,
//     );
//   } else {
//     document.documentElement.style.removeProperty('--layoutWidth');
//   }
// }


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// window.addEventListener('resize', updateRootStyle);
// updateRootStyle();
