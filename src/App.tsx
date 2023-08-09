import { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AppFooterCopyright from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  return (
    <div className='bg-secondary-light dark:bg-primary-dark transition duration-300'>
      <Router>
        <AppHeader key='AppHeader' />
        <Suspense fallback={''} key={'Suspense'}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
        <AppFooterCopyright key='AppFooter' />
      </Router>
    </div>
  );
};

export default App;
