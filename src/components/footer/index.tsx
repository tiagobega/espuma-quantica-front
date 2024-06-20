import Container from '../container';

import image_logo from '@assets/images/logo.svg';

import './index.scss';
import Typography from '../typography';
import {COLOR} from '@app/constants/color';
import Icon from '../icons';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className={'Footer'}>
      <div className="Footer__wrapper">
        <Container paddingX className="Footer__content" as="div">
          <img src={image_logo} />
          <div className="Footer__content__list">
            <div>
              <Typography type="h3" color={COLOR.WHITE} size={16}>
                Fale Conosco
              </Typography>
              <Typography type="h4" color={COLOR.WHITE} size={14}>
                Telefone: (99) 9 9644-0575
              </Typography>
              <Typography type="h4" color={COLOR.WHITE} size={14}>
                E-mail: espumaquantica@hotmail.com
              </Typography>
            </div>
            <div>
              <Typography type="h3" color={COLOR.WHITE} size={16}>
                Links
              </Typography>
              <Typography type="h4" color={COLOR.WHITE} size={14}>
                Revendedores
              </Typography>
              <Typography type="h4" color={COLOR.WHITE} size={14}>
                Cosméticos Energizados
              </Typography>
              <Typography type="h4" color={COLOR.WHITE} size={14}>
                Sobre
              </Typography>
            </div>
          </div>
        </Container>
      </div>
      <div className="Footer__wrights">
        <Container paddingX as="div" className="Footer__wrights__container">
          <Typography
            type="p"
            size={14}
            family="archia"
            align={{xs: 'center', md: 'left'}}>
            Todos os direitos reservados
            <br />© Copyright Espuma Quântica 2024
          </Typography>
          <ul>
            <li>
              <Icon type="socialInstagram" />
            </li>
            <li>
              <Icon type="socialWhasapp" />
            </li>
            <li>
              <Icon type="socialFacebook" />
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
