import hero_video from '@assets/videos/hero.webm';

import Typography from '@components/typography';

import './index.scss';
import {COLOR} from '@app/constants/color';
import Container from '@app/components/container';
import Button from '@app/components/button';

export interface HomerViewProps {}

const HomeView = ({}: HomerViewProps) => {
  return (
    <div className={'HomeView'}>
      <section className={'HomeView__banner'}>
        <div className="HomeView__banner__background">
          <video
            width={'100%'}
            height={'100%'}
            autoPlay
            muted
            playsInline
            controls={false}
            loop>
            <source src={hero_video} type="video/webm" />
          </video>
        </div>

        <div className="HomeView__banner__content">
          <Typography
            type="h1"
            size={64}
            family={'archia'}
            weight={700}
            color={COLOR.WHITE}>
            CODE STICKERS, SEU FLORAL QUÂNTICO EM FORMA DE{' '}
            <Typography
              type="span"
              color={COLOR.ORANGE}
              size={64}
              family={'archia'}
              weight={700}>
              ADESIVO
            </Typography>
            .
          </Typography>
        </div>
      </section>

      <Container className={'HomeView__stickers'}>
        <Typography
          type={'h2'}
          size={42}
          family={'archia'}
          weight={700}
          color={'black'}>
          CODE STICKERS, O SALTO QUÂNTICO DOS{' '}
          <Typography type={'span'} inherit color={'orange'} gradient>
            FLORAIS!
          </Typography>
        </Typography>
        <div className={'HomeView__stickers__image'}></div>
        <div className={'HomeView__stickers__button'}>
          <Button icon={'star'}>Conhecer</Button>
        </div>
        <Typography size={20} align={'center'}>
          Adesivos Hipoalergênicos Corporais com frequências em hertz projetados{' '}
          <br />
          para melhorar a voltagem do seu organismo. Organize seu campo de
          informação agora!
        </Typography>
      </Container>

      <Container className={'HomeView__frequency'}>
        <div className={'HomeView__frequency__content'}>
          <Typography type="h2" size={42} family={'archia'}>
            100% Sua Frequência{' '}
            <Typography type="span" inherit gradient weight={700}>
              Ideal
            </Typography>
          </Typography>
          <Typography type="p" size={20}>
            Bem vindo a tua melhor versão{' '}
            <Typography type="span" color={COLOR.BLUE_DARK} inherit>
              bioenergética.
            </Typography>
            <br />
            <br />
            As fórmulas Biofrequenciadas em hertz dos adesivos code Stickers
            ativam os spins dos teus átomos e a sua biologia para:
          </Typography>
          <ul className={'HomeView__frequency__content__features'}>
            <li className={'HomeView__frequency__content__features__item'}>
              <Typography type="h3" align={'center'} size={20}>
                Uma vida mais harmônica.
              </Typography>
            </li>
            <li className={'HomeView__frequency__content__features__item'}>
              <Typography type="h3" align={'center'} size={20}>
                Uma vida com mais energia vital.
              </Typography>
            </li>
            <li className={'HomeView__frequency__content__features__item'}>
              <Typography type="h3" align={'center'} size={20}>
                Uma vida mais consciente e natural.
              </Typography>
            </li>
            <li className={'HomeView__frequency__content__features__item'}>
              <Typography type="h3" align={'center'} size={20}>
                Uma harmonia com a geometria divina.{' '}
              </Typography>
            </li>
          </ul>
        </div>
        <div className={'HomeView__frequency__banner'}>
          <div className={'HomeView__frequency__banner__image'}>
            {/* <img src={}/> */}
          </div>
          <div className={'HomeView__frequency__banner__badges'}></div>
        </div>
      </Container>

      <Container className={'HomeView__future'}>
        <div className={'HomeView__future__banner'}>
          <img />
        </div>
        <div className={'HomeView__future__content'}>
          <Typography type="h2" family={'archia'} size={42} weight={300}>
            Vislumbrando o{' '}
            <Typography type="span" gradient inherit weight={700}>
              Futuro
            </Typography>
          </Typography>
          <Typography size={20}>
            Compromete-se também com projetos de ensino, pesquisa, ciência,
            tecnologia e responsabilidade social, visando melhorar a qualidade
            de vida para todos. A empresa quer ser reconhecida por suas
            iniciativas dinâmicas e pelo impacto positivo que promove,
            dedicando-se a moldar um futuro melhor para todos.
          </Typography>
          <Button>Sobre nós</Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeView;
