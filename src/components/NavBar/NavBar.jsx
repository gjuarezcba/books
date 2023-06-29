import { FaBeer } from 'react-icons/fa';
export const NavBar = ()=>{
    return (
    <header>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <img src={"https://www.shutterstock.com/image-photo/kiev-ukraine-march-31-2015-260nw-275940803.jpg"}  className="logo" alt="Gus Logo"/>
          <span>Menu</span>
          <FaBeer />
          <nav>
            <a>Misterio</a>
            <a>Terror</a>
            <a>Terror</a>
            
          </nav>
        </div>
      </div>
    </header>);
  };