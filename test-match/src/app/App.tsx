import React from 'react';
import { useMatches } from '../hooks/useMatches';
import './index.css';
import { Layout } from '../components';
import { PageContent } from '../components/PageContent';

function App() {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
}

export default App;
