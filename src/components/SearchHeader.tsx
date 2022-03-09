import { Link } from 'react-router-dom';

import logo from 'assets/Logo_ML.png';
import searchIcon from 'assets/ic_Search.png';

import TextField from './TextField';

const SearchHeader = () => {
  return (
    <header className="header-wrapper">
      <menu className="menu-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt={`Ícone do Mercado Livre`} />
          </Link>
        </div>
        <TextField
          name="Search"
          icon={searchIcon}
          placeholder="Nunca dejes de buscar"
        />
      </menu>
    </header>
  );
};

export default SearchHeader;
