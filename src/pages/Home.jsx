// import { Link } from 'react-router-dom';
import ImgSrc from '../assets/home_carrr.jpg';
import {
  Container,
  NameTitle,
  StyledBtn,
  Paragraph,
  Section,
  Title,
  TitleWrapper,
  Wrapper,
} from './Pages.styled';

const Home = () => {
  return (
    <Container $url={ImgSrc && `url(${ImgSrc})`}>
      <Section>
        <Wrapper>
          <TitleWrapper>
            <NameTitle>Easy Ride </NameTitle>
            <Title>all for you</Title>
            <NameTitle>Rent a car in style</NameTitle>
            <Paragraph>Our service aims to make your trips perfect</Paragraph>
            <StyledBtn to="/catalog">Order now</StyledBtn>
          </TitleWrapper>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default Home;
