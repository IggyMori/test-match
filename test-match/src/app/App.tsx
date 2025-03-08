import React from 'react';
import '@fontsource/inter';
import { useMatches } from '../hooks/useMatches';
import './index.css';
import { Layout } from '../components';
import { PageContent } from '../components/PageContent';
import { Header } from '../components/Header';

function App() {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
}

export default App;
