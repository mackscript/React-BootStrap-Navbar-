import logo from './logo.svg'
import './App.css'
import * as ReactBootStrap from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <ReactBootStrap.Navbar bg='light' expand='lg'>
        <ReactBootStrap.Navbar.Brand href='#home'>
          React-Bootstrap
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
        <ReactBootStrap.Navbar.Collapse id='basic-navbar-nav'>
          <ReactBootStrap.Nav className='mr-auto'>
            <ReactBootStrap.Nav.Link href='#home'>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#link'>Link</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#home'>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#link'>Link</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#home'>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href='#link'>Link</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
          {/* <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
            />
            
          </ReactBootStrap.Form> */}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default App
