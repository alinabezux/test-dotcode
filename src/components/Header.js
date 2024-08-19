import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <nav>
          <Link to="/task1"><button>TASK 1</button></Link>
          <Link to="/task2"><button>TASK 2</button></Link>
        </nav>
      </header>
    );
};

export default Header;
