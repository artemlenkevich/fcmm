import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Layout } from './components/Layout';
import { NewPage } from './pages/New';
import { PopularPage } from './pages/PopularPage';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<PopularPage />} />
          <Route path='/popular' element={<PopularPage />} />
          <Route path='/new' element={<NewPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;