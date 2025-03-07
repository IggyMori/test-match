import { createRoot } from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from './Providers/QueryClientProvider/QueryClientProvider';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider>
    <App />
  </QueryClientProvider>,
);
