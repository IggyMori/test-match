import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClientProvider } from './Providers/QueryClientProvider/QueryClientProvider';
import { ThemeProvider } from './Providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
);
