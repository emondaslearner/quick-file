import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="main">
      <Header />
      <Menu />
      <div className="content">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
