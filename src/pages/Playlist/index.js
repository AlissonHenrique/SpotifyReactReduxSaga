import React from "react";
import { Container, Header, SongList, SongItem } from "./styles";
import PlusIcon from "../../assets/images/plus.svg";
import ClockIcon from "../../assets/images/clock.svg";
const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://is1-ssl.mzstatic.com/image/thumb/Music/8f/11/e6/mzi.csprjcdj.jpg/600x600bf.jpg"
        alt="Playlist"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock Forever</h1>
        <p>13 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>
    <SongList>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td colSpan={5}>Nenhuma música cadastrada</td>
        </tr>
        <SongItem>
          <td>
            <img src={PlusIcon} alt="Adicionar à playlist" />
          </td>
          <td>asdasd</td>
          <td>asdasd</td>
          <td>asdsd</td>
          <td>3:26</td>
        </SongItem>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
