import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faHeart,
  faUser,
  faCompass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
const Li = () => {
  const icon = [faHouse, faCompass, faHeart, faUser];
  return icon.map((item) => (
    <li class="navIcon">
      <div className="icon">
        <a>
          <FontAwesomeIcon icon={item} />
        </a>
      </div>
    </li>
  ));
};
const Header = () => {
  return (
    <header>
      <nav>
        <ul class="nav-ul">
          <li>
            <div class="nav-insta">
              <FontAwesomeIcon icon={faInstagram} />
              <p>|</p>
              <h1>instagram</h1>
            </div>
          </li>
          <li class="inputLi">
            <div>
              <input type="text" />
            </div>
            <div class="icondiv">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>검색</p>
            </div>
          </li>
          <div class="iconLi">
            <Li />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
