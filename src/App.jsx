import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Directory from './pages/Directory';
import About from './pages/About';
import Events from './pages/Events';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Submit from './pages/Submit';
import Alerts from './pages/Alerts';
function App() {
    return (<BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/directory' element={<Directory />}/>
          <Route path='/events' element={<Events />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/submit' element={<Submit />}/>
          <Route path='/alerts' element={<Alerts />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Layout>
    </BrowserRouter>);
}
export default App;
