export interface HeaderProps {}

import Icon from '../icons';
import Typography from '../typography';

import './index.scss';

import logo_image from '@assets/images/logo.svg';
import logo_small_image from '@assets/images/logo_small.svg';
import Container from '../container';
import classNames from 'classnames';
import {useState} from 'react';

const Header = ({}: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={'Header'}>
        <Container paddingX className={'Header__container'}>
          <div className="Header__logo">
            <img className="full" src={logo_image} />
            <img className="small" src={logo_small_image} />
          </div>

          <nav
            className={classNames('Header__navbar', {
              'Header__navbar--open': open,
            })}>
            <ul className="Header__navbar__list">
              <li className="Header__navbar__list__item">
                <Typography
                  family={'archia'}
                  weight={700}
                  size={{xs: 20, xl: 16}}>
                  Revendedores
                </Typography>
              </li>
              <li className="Header__navbar__list__item">
                <Typography
                  family={'archia'}
                  weight={700}
                  size={{xs: 20, xl: 16}}>
                  Cosméticos Energizados
                </Typography>
              </li>
              <li className="Header__navbar__list__item">
                <Typography
                  family={'archia'}
                  weight={700}
                  size={{xs: 20, xl: 16}}>
                  Sobre
                </Typography>
              </li>
              <li className="Header__navbar__list__item">
                <Typography
                  family={'archia'}
                  weight={700}
                  size={{xs: 20, xl: 16}}>
                  Loja
                </Typography>
              </li>
              <li className="Header__navbar__list__item">
                <Typography
                  family={'archia'}
                  weight={700}
                  size={{xs: 20, xl: 16}}>
                  Login
                </Typography>
              </li>
            </ul>
          </nav>
          <div
            className={classNames('Header__button', {
              'Header__button--open': open,
            })}
            onClick={() => setOpen(!open)}>
            <Icon type={open ? 'close' : 'menu'} />
          </div>
        </Container>
      </header>
      <Container
        paddingX
        className={classNames('HeaderMobileMenu', {
          'HeaderMobileMenu--open': open,
        })}>
        <nav>
          <ul>
            <li className="Header__navbar__list__item">
              <Typography
                family={'archia'}
                weight={700}
                size={{xs: 20, xl: 16}}>
                Revendedores
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Typography
                family={'archia'}
                weight={700}
                size={{xs: 20, xl: 16}}>
                Cosméticos Energizados
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Typography
                family={'archia'}
                weight={700}
                size={{xs: 20, xl: 16}}>
                Sobre
              </Typography>
            </li>
            <li className="Header__navbar__list__item">
              <Typography
                family={'archia'}
                weight={700}
                size={{xs: 20, xl: 16}}>
                loja
              </Typography>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Header;
