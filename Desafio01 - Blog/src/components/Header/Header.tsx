import './styles.scss';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className="header-background">
      <div className="header-texts">
        <h1 className="title">Codelândia</h1>
        <h2 className="subtitle">blog</h2>
      </div>
      <div className="input-div">
        {/* <FaSearch className="icon" color="#ffffff" size={25} /> */}
        <input
          className="search-bar"
          type="text"
          placeholder="Pesquisar no blog"
        ></input>
      </div>
    </header>
  );
}

export default Header;
