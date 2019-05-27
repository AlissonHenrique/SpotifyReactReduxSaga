import React from 'react';

import { Container, Title, List, PlayList } from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <PlayList to="playlists/1">
        <img
          src="https://marketplace.canva.com/MAB6qmZ_0fc/1/0/thumbnail_large/canva-minimal-music-album-cover-MAB6qmZ_0fc.jpg"
          alt="Greatest Hits"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>

      <PlayList to="playlists/1">
        <img
          src="https://marketplace.canva.com/MAB6qNBAV-0/1/0/thumbnail_large/canva-in-too-deep-diving-music-album-cover-MAB6qNBAV-0.jpg"
          alt="Greatest Hits"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>

      <PlayList to="playlists/1">
        <img
          src="https://marketplace.canva.com/MACF-O76mPY/1/0/thumbnail_large/canva--sunset-indie-album-cover-MACF-O76mPY.jpg"
          alt="Greatest Hits"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>

      <PlayList to="playlists/1">
        <img
          src="http://www.coupdemainmagazine.com/sites/default/files/styles/full_width/public/article/12442/hero-12442-543045218.jpg?itok=KpMSgg9Y"
          alt="Greatest Hits"
        />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto programa ouvindo apenas as melhores do rock mundial!</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
