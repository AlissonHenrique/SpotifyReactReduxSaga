import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/17318431?v=4" alt="Alisson Henrique" />
      Alisson Henrique
    </User>
  </Container>
);

export default Header;
