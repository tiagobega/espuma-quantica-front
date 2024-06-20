import {Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import hero_video from '@assets/videos/hero.webm';

import image_stickers from '@assets/images/code_stickers.png';

import image_frequency_1 from '@assets/images/frequency_1.png';
import image_frequency_2 from '@assets/images/frequency_2.png';
import image_frequency_3 from '@assets/images/frequency_3.png';

import image_frequency_midcontent from '@assets/images/frequency__midcontent.png';

import image_future from '@assets/images/future.png';
import image_future_midcontent from '@assets/images/future_midcontent.png';

import image_energized from '@assets/images/energized.png';
import image_energized_midcontent from '@assets/images/energized_midcontent.png';

import image_human from '@assets/images/humam.png';
import image_science_background from '@assets/images/science_background.png';

import Typography from '@components/typography';

import {COLOR} from '@app/constants/color';
import Container from '@app/components/container';
import Button from '@app/components/button';
import Icon from '@app/components/icons';

import './index.scss';
import 'swiper/css';

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
            size={{xs: 32, md: 64}}
            family={'archia'}
            weight={700}
            color={COLOR.WHITE}>
            CODE STICKERS, SEU FLORAL QUÂNTICO EM FORMA DE{' '}
            <Typography
              type="span"
              color={COLOR.ORANGE}
              family={'archia'}
              weight={700}
              inherit>
              ADESIVO
            </Typography>
            .
          </Typography>
        </div>
      </section>

      <Container paddingX paddingY className={'HomeView__stickers'}>
        <Typography
          type={'h2'}
          size={{xs: 32, md: 42}}
          family={'archia'}
          weight={{xs: 400, md: 700}}
          color={'black'}
          align={'center'}>
          CODE STICKERS, O SALTO QUÂNTICO DOS{' '}
          <Typography type={'span'} inherit color={'orange'} gradient>
            FLORAIS!
          </Typography>
        </Typography>
        <div className={'HomeView__stickers__image'}>
          <div>
            <img src={image_stickers} />
          </div>
        </div>
        <div className={'HomeView__stickers__button'}>
          <Button icon={'star'}>Conhecer</Button>
        </div>
        <Typography size={{xs: 18, md: 20}} align={'center'}>
          Adesivos Hipoalergênicos Corporais com frequências em hertz projetados{' '}
          <br />
          para melhorar a voltagem do seu organismo. Organize seu campo de
          informação agora!
        </Typography>
      </Container>

      <Container paddingX paddingY className={'HomeView__frequency'}>
        <div className={'HomeView__frequency__content'}>
          <Typography
            type="h2"
            size={{xs: 22, md: 42}}
            family={'archia'}
            align={{xs: 'center', lg: 'left'}}>
            100% Sua Frequência{' '}
            <Typography type="span" inherit gradient weight={700}>
              Ideal
            </Typography>
          </Typography>
          <div className={'HomeView__frequency__content__midImage'}>
            <img src={image_frequency_midcontent} />
          </div>
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

          <div className="HomeView__frequency__content__features">
            <ul>
              <li className={'HomeView__frequency__content__features__item'}>
                <Icon type="heart" size={40} />
                <Typography type="h3" align={'center'} size={20}>
                  Uma vida mais harmônica.
                </Typography>
              </li>
              <li className={'HomeView__frequency__content__features__item'}>
                <Icon type="leaf" size={40} />
                <Typography type="h3" align={'center'} size={20}>
                  Uma vida com mais energia vital.
                </Typography>
              </li>
              <li className={'HomeView__frequency__content__features__item'}>
                <Icon type="brocolli" size={40} />
                <Typography type="h3" align={'center'} size={20}>
                  Uma vida mais consciente e natural.
                </Typography>
              </li>
              <li className={'HomeView__frequency__content__features__item'}>
                <Icon type="box" size={40} />
                <Typography type="h3" align={'center'} size={20}>
                  Uma harmonia com a geometria divina.{' '}
                </Typography>
              </li>
            </ul>
            <div className="HomeView__frequency__content__features__slider">
              <Swiper
                loop={true}
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                }}>
                <SwiperSlide>
                  <div
                    className={'HomeView__frequency__content__features__item'}>
                    <Icon type="heart" size={40} />
                    <Typography type="h3" align={'center'} size={20}>
                      Uma vida mais harmônica.
                    </Typography>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={'HomeView__frequency__content__features__item'}>
                    <Icon type="leaf" size={40} />
                    <Typography type="h3" align={'center'} size={20}>
                      Uma vida com mais energia vital.
                    </Typography>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={'HomeView__frequency__content__features__item'}>
                    <Icon type="brocolli" size={40} />
                    <Typography type="h3" align={'center'} size={20}>
                      Uma vida mais consciente e natural.
                    </Typography>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={'HomeView__frequency__content__features__item'}>
                    <Icon type="box" size={40} />
                    <Typography type="h3" align={'center'} size={20}>
                      Uma harmonia com a geometria divina.{' '}
                    </Typography>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className={'HomeView__frequency__banner'}>
          <div className={'HomeView__frequency__banner__image'}>
            <Swiper
              loop={true}
              slidesPerView={1}
              autoplay={{delay: 3000}}
              modules={[Autoplay]}
              allowTouchMove={false}>
              <SwiperSlide>
                <img src={image_frequency_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image_frequency_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image_frequency_3} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={'HomeView__frequency__banner__badges'}>
            <ul>
              <li className={'HomeView__frequency__banner__badges__item'}>
                <Icon type="badgeVegan" size={48} />
              </li>
              <li className={'HomeView__frequency__banner__badges__item'}>
                <Icon type="badgeLatexFree" size={48} />
              </li>
              <li className={'HomeView__frequency__banner__badges__item'}>
                <Icon type="badgeCrueltyFree" size={48} />
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Container paddingX paddingY className={'HomeView__future'}>
        <div className={'HomeView__future__banner'}>
          <img src={image_future} />
        </div>
        <div className={'HomeView__future__content'}>
          <Typography
            type="h2"
            family={'archia'}
            size={{xs: 24, lg: 42}}
            align={{xs: 'center', lg: 'left'}}
            weight={300}>
            Vislumbrando o{' '}
            <Typography type="span" gradient inherit weight={700}>
              Futuro
            </Typography>
          </Typography>
          <div className={'HomeView__future__content__midImage'}>
            <img src={image_future_midcontent} />
          </div>
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

      <div className="HomeView__science">
        <div className="HomeView__science__background">
          <img src={image_science_background} />
        </div>
        <Container paddingX className="HomeView__science__container">
          <div className="HomeView__science__title">
            <Icon type="science" size={88} />
            <Typography
              type="h2"
              size={{xs: 24, lg: 42}}
              family={'archia'}
              align={'center'}
              color={COLOR.WHITE}>
              Conheça a ciência por detrás dos nossos produtos.
            </Typography>
          </div>

          <Typography
            size={20}
            align={{xs: 'left', md: 'center'}}
            color={COLOR.WHITE}>
            A biofísica e suas formas expressas como a cimática é a ciência
            sobre a qual deleitamos a criação de todo o diferencial de nossos
            produtos. Através de máquinas de tecnologia psicotrônica, as quais
            são chamadas máquinas quânticas inserimos padrões de informação em
            hertz em nossa linha de produtos tornando- os assim produtos com
            informações energéticas mais harmônicas e organizadas. Fazendo com
            que a qualidade do produto seja diferenciada e traga bem estar aos
            nossos consumidores.
          </Typography>

          <div className="HomeView__science__content">
            <div className="HomeView__science__card">
              <Typography size={20} color={COLOR.WHITE} align={'center'}>
                As células entram em ressonância com essa informação por ser uma
                informação considerada natural para elas, ou seja, biocompatível
                e harmônica com o organismo.
                <br />
                <br />
                Os Stickers atuam na energia vital e sutil do ser, seja ele
                humano ou animal de outra espécie, ou seja, atuam em primeiro
                lugar no corpo eletromagnético dos seres.
              </Typography>
            </div>
            <Button variant={'white'}>Explicação Nerd</Button>
          </div>
        </Container>
        <img className="HomeView__science__human" src={image_human} />
      </div>

      <Container paddingX paddingY className={'HomeView__energized'}>
        <div className={'HomeView__energized__banner'}>
          <img src={image_energized} />
        </div>
        <div className={'HomeView__energized__content'}>
          <Typography
            type="h2"
            family={'archia'}
            size={{xs: 24, md: 42}}
            align={{xs: 'center', md: 'left'}}
            weight={300}>
            Cosméticos Naturais{' '}
            <Typography type="span" gradient inherit weight={700}>
              Energizados
            </Typography>
          </Typography>

          <div className={'HomeView__energized__content__midImage'}>
            <img src={image_energized_midcontent} />
          </div>

          <Typography size={20}>
            A Espuma Quântica conta hoje com 2 linhas de produtos. A primeira
            delas de Cosméticos Naturais e bioFrequenciados. A segunda Linha de
            acessórios de biossinais, os quais se apresentam em forma de
            Stickers, adesivos para o uso de terapia Vibracional sem uso de
            gotas florais ou géis Frequenciados .
          </Typography>
          <Button>Conhecer Cosméticos</Button>
        </div>
      </Container>

      <Container paddingX paddingY className={'HomeView__resellers'}>
        <Typography
          type="h2"
          family={'archia'}
          size={{xs: 32, md: 42}}
          weight={{xs: 300, md: 700}}
          align={'center'}>
          Conheça Nossos Revendedores
        </Typography>
        <ul className={'HomeView__resellers__list'}>
          {new Array(5).fill(undefined).map((item, index) => (
            <li className={'HomeView__resellers__list__item'} key={index}>
              <div className={'HomeView__resellers__list__item__image'}>
                <div>
                  <img src={''} />
                </div>
              </div>
              <Typography
                type="h3"
                family={'archia'}
                align={'center'}
                size={{xs: 16, md: 22}}
                weight={700}>
                Lorem Ipsum
              </Typography>
              <Typography type="h4" family={'archia'} size={{xs: 18}}>
                São Paulo
              </Typography>
            </li>
          ))}
        </ul>
        <Button>Ver todos os revendedores</Button>
      </Container>

      <Container paddingX paddingY className={'HomeView__disclaimer'}>
        <Typography type="h2" align={'center'} size={22}>
          Somos todos parte de uma teia de conhecimento, onde cada ação
          reverbera não apenas em nosso próprio universo, mas no todo.
        </Typography>
      </Container>
    </div>
  );
};

export default HomeView;
