import hero_video from '@assets/videos/hero.webm';

import Typography from '@components/typography';

import './index.scss';
import {COLOR} from '@app/constants/color';
import Container from '@app/components/container';

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
        <div className={'HomeView__stickers__Button'}></div>
        <Typography size={20} align={'center'}>
          Adesivos Hipoalergênicos Corporais com frequências em hertz projetados{' '}
          <br />
          para melhorar a voltagem do seu organismo. Organize seu campo de
          informação agora!
        </Typography>
      </Container>
      {/* <section className={'HomView__banner'}></section> */}
    </div>
  );
};

export default HomeView;
