import './styles.scss';

function Header() {
  return (
    <header className="header-background">
      <div className="header-texts">
        <h1 className="title">Codelândia</h1>
        <h2 className="subtitle">blog</h2>
      </div>
      <div className="input-div">
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
