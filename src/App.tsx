import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages';
import Layout from './component/layout';
import Rotated from './pages/rotated';
import { ROUTES } from './libs/routes';
import Glowing from './pages/glowing';
import Marketing from './pages/marketing';
import Bubbles from './pages/bubbles';
import ParallaxPage from './pages/parallax';

AOS.init({ duration: 1000 });

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ROTATED} element={<Rotated />} />
          <Route path={ROUTES.GLOWING} element={<Glowing />} />
          <Route path={ROUTES.MARKETING} element={<Marketing />} />
          <Route path={ROUTES.BUBBLES} element={<Bubbles />} />
          <Route path={ROUTES.PARALLAX} element={<ParallaxPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
