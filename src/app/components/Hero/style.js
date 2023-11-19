import styled, { keyframes } from 'styled-components';
import theme from '../../theme';

const Floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const StyledHero = styled.section`
    background-color: transparent;
    padding-top: 0.8rem;
    height: 674px;
    @media(max-width: 970px){
      background-color: ${theme.colors.gray1};
    }
    @media(max-width: 970px){
        height: auto;
        padding-top: 0rem;
    }
`;

export const WrapperHero = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 970px){
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 5rem;
    }
`;

export const LeftSideHero = styled.div`
    width: 100%;
    max-width: 68.7rem;
    margin-top: 4.7rem;
    @media(max-width: 970px){
        margin-top: 3.0rem;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const RightSideHero = styled.div`
    position: relative;
    height: 666px;
    width: 602px;
    .hero-section__image-main{
        position: absolute;
        right: 30px;
        bottom: 0;
        max-width: 602px;
    }
    .hero-section__image-chat{
        animation: ${Floating} 8s ease-in-out infinite;
        z-index: 2;
        border-radius: 50%;
        position: absolute;
        left: 23%;
        bottom: 60%;
        box-shadow: 0px 30px 40px -20px rgba(74, 77, 96, 0.20);
        backdrop-filter: blur(1.2rem);
    }
    .hero-section__image-graph{
        animation: ${Floating} 5s ease-in-out infinite;
        z-index: 3;
        position: absolute;
        right: 0;
        bottom: 30%;
        box-shadow: 0px 30px 40px -20px rgba(74, 77, 96, 0.20);
        backdrop-filter: blur(1.2rem);
    }
    @media(max-width: 1200px){
      .hero-section__image-chat {
        left: 10%;
      }
    }
    @media(max-width: 1150px){
        .hero-section__image-chat{
          left: 0%;
        }
    }
    @media(max-width: 1110px){
        .hero-section__image-chat{

        }
    }
    @media (max-width: 970px) {
      height: 650px;
      width: 100%;
      .hero-section__image-main {
        right: 20%;
        max-width: 100%;
      }

      .hero-section__image-chat {
        left: 40%;
        bottom: 66%;
      }

      .hero-section__image-graph {
        right: 15%;
        bottom: 20%;
      }
    }
    @media(max-width: 800px){
      height: 644px;
      .hero-section__image-main {
        right: 10%;
      }
      .hero-section__image-chat {
        left: 40%;
      }

    }
    @media(max-width: 700px){
      height: 644px;
      .hero-section__image-main {
        right: 0;
      }
      .hero-section__image-chat {
        width: 50px;
      }

      .hero-section__image-graph {
        width: 180px;
      }
    }

    @media(max-width: 630px){
      height: 600px;
      .hero-section__image-graph {
        width: 150px;
      }
    }
    @media(max-width: 610px){
      height: 580px;
    }
    @media(max-width: 590px){
      height: 550px;
    }
    @media(max-width: 560px){
      height: 520px;
    }
    @media(max-width: 530px){
      height: 490px;
    }
    @media(max-width: 500px){
      height: 460px;
    }
    @media(max-width: 470px){
      height: 430px;
      .hero-section__image-graph {
        width: 130px;
      }
    }
    @media(max-width: 440px){
      height: 400px;
      .hero-section__image-graph {
        left: 60%;
        bottom: 20%;
      }
    }
    @media(max-width: 410px){
      height: 370px;
    }
    @media(max-width: 390px){
      height: 340px;
      .hero-section__image-graph {
        left: 45%;
      }
      .hero-section__image-chat{
        left: 20%;
      }
    }
    @media(max-width: 360px){
      height: 310px;
    }
    @media(max-width: 330px){
      height: 290px;
    }
    @media(max-width: 300px){
      height: 260px;
    }
    @media(max-width: 270px){
      height: 220px;
    }
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const TagText = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: ${theme.colors.dark500};
`;

export const MainText = styled.h1`
  margin: 1.7rem 0 1.7rem;
  color: ${theme.colors.dark500};
  font-size: 7.2rem;
  font-weight: 400;
  line-height: 125%;
  width: 100%;

  strong {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.primaryMain};
    font-size: 6.8rem;
    font-weight: 400;
    line-height: 125%;
  }

  @media(max-width: 1200px){
    font-size: 5.5rem;
    max-width: 500px;
    strong{
        font-size: 5.5rem;
    }
  }
  @media(max-width: 1040px){
    max-width: 40rem;
  }
  @media(max-width: 970px){
    max-width: 600px;
   }
   @media(max-width: 610px){
    font-size: 4.5rem;
    strong{
      font-size: 4.5rem;
    }
   }
   @media(max-width: 520px){
    font-size: 3.8rem;
    strong{
      font-size: 3.8rem;
    }
   }
   @media(max-width: 430px){
    font-size: 3.2rem;
    strong{
      font-size: 3.2rem;
    }
   }
   @media(max-width: 380px){
    font-size: 2.7rem;
    strong{
      font-size: 2.7rem;
    }
   }
`;

export const ParagraphText = styled.p`
  margin-bottom: 4rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 150%;
  max-width: 54.5rem;
  @media(max-width: 1060px){
    max-width: 42rem;
    font-size: 1.7rem;
  }
  @media(max-width: 1040px){
    max-width: 35rem;
  }
  @media(max-width: 1000px){
    max-width: 30rem;
  }
  @media(max-width: 970px){
    max-width: 450px;
   }
   @media(max-width: 550px){
    font-size: 1.6rem;
   }
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4.9rem;
  @media(max-width: 1150px){
    flex-direction: column;
    align-items: start;
  }
  @media(max-width: 970px){
    align-items: center;
    gap: 3.0rem;
}
`;

export const ArrowIcon = styled.div`
  margin: 6.8rem 0rem 12.6rem 0rem;
  @media(max-width: 1150px){
    margin: 3.8rem 0rem 0rem 0rem;
  }
  @media(max-width: 970px){
    display: none;
   }
`;
