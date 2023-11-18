import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/Card';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
