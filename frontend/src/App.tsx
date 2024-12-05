import AppToolbar from './components/UI/AppToolbar/AppToolbar.tsx';
import { Container, CssBaseline } from '@mui/material';
import Encryptor from './features/containers/Encryptor.tsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>

      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Encryptor />}/>
            <Route path="/encode" element={<Encryptor />}/>
            <Route path="/decode" element={<Encryptor/>}/>
            <Route path="*" element={(<h1>Not Found</h1>)}/>
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App
