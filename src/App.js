import './App.css';
import {useState} from 'react'
import {BrowserRouter,NavLink,Route,Routes} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {ClockCircleOutlined,GiftTwoTone,MessageOutlined,BookOutlined,PaperClipOutlined} from '@ant-design/icons'
import { FileAddOutlined  } from '@ant-design/icons/lib/icons';
import Extras from './pages/Extras/Extras'
import Todos from './pages/Todos/Todos'
import Notes from './pages/Notes/Notes'
import MyLinks from './pages/MyLinks/MyLinks'
import Pomodoro from './pages/Pomodoro/Pomodoro'
import Quotes from './pages/Quotes/Quotes'


function App() {
  const [toggle, setToggle] = useState(false);
  const togglefn =()=>{
    setToggle(!toggle)
  }
  //PaperClipOutlined
  return (
    <BrowserRouter>
    <div className="App">
      <div className={toggle ? "show-menu" : "nav"}  id='nav'  >
            <nav className='nav__content'>
                <div className="nav__toggle" id='nav-toggle' onClick={() => togglefn()}>
                    <i className={toggle ? "fa fa-angle-right rotate-icon" :  "fa fa-angle-right"}></i>
                </div>
                <NavLink to='/' className='nav__logo'>
                    <i className="fa fa-sticky-note"></i>
                    <span className='nav_logo-name' style={{color:"teal"}}>Bool</span>
                </NavLink>
                <div className="nav__list">
                  <NavLink to='/' className='nav__link'>
                      
                      <MessageOutlined />
                      <span className='nav__name'>Quotes</span>
                  </NavLink>
                  <NavLink to='/notes' className='nav__link'>
                
                      <BookOutlined />
                      <span className='nav__name'>Notes</span>
                  </NavLink>
                  <NavLink to='/todo' className='nav__link'>
                      
                      <FileAddOutlined />
                      <span className='nav__name'>Todo</span>
                  </NavLink>
                  <NavLink to='/pomodoro' className='nav__link'>
                      <ClockCircleOutlined />
                      <span className='nav__name'>Pomodoro</span>
                  </NavLink>
                  <NavLink to='/mylinks' className='nav__link'>
                      
                      <PaperClipOutlined />
                      <span className='nav__name'>MyLinks</span>
                  </NavLink>
                  <NavLink to='/extras' className='nav__link'>
                      
                      <GiftTwoTone />
                      <span className='nav__name'>Extras</span>
                  </NavLink>
                </div>

            </nav>
        </div>
        <main className='container section'>
          <h1>Bool</h1>
          <Routes>
                <Route exact path='/' element={<Quotes />} />
                <Route path='/todo' element={<Todos />} />
                <Route path='/notes' element={<Notes />} />
                <Route path='/pomodoro' element={<Pomodoro />} />
                <Route path='/mylinks' element={<MyLinks />} />
                <Route path='/extras' element={<Extras />} />
          </Routes>
        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
