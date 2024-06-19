export interface HeaderProps {}

import {COLOR} from '@app/constants/color';
import Icon from '../icons';
import Typography from '../typography';
import './index.scss';

import logo_image from '@assets/images/logo.svg';
import Container from '../container';

const Header = ({}: HeaderProps) => {
  return (
    <header className={'Header'}>
      <Container className={'Header__container'}>
        <div className="Header__logo">
          <img src={logo_image} />
        </div>

        <nav className="Header__navbar">
          <ul className="Header__navbar__list">
            <li className="Header__navbar__list__item">
              <Typography family={'archia'} weight={700} size={20}>
                Revendedores
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Typography family={'archia'} weight={700} size={20}>
                Cosmeticos Energizados
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Typography family={'archia'} weight={700} size={20}>
                Sobre
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Icon type="shopBag" />
            </li>
            <li className="Header__navbar__list__item">
              <Icon type="user" />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
