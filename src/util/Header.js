import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/insert" className="item">
        Insert item
      </Link>

    </div>
  );
};

export default Header;
