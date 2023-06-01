import './App.css';
import { Suspense, lazy } from 'react';

// const GoogleForm = lazy(() => import('./component/GoogleForm'))
import GoogleForm from './component/GoogleForm'


function App() {
  return (
    <Suspense fallback={<div>Loading....</div> }>
      <div className="App">
        <GoogleForm />
      </div>
    </Suspense>

  );
}

export default App;
