import styled from "styled-components";

export const HeroStyles = styled.div`
  min-height: 70vh;
  position: relative;
    z-index: 30;

  .image_overlay {
      background-color:#0a3041;
      position:absolute;
    height:100%;
    width:100%;
    opacity:.6;
    z-index: 30;

  }
  .image_wrapper {
    position:absolute;
    height:100%;
    width:100%;
    /* z-index: 20; */
    
    img {
    height:100%;
    width:100%;
    object-fit: cover;
    }
  }
  .hero_header{
    border-bottom: 1px solid rgba(255,255,255,.5);
    padding-bottom: 4rem;
  }
  .hero_center {
    padding:12rem 0;
    padding-bottom: 30rem;
    z-index:20;
    position:relative;
    @media (max-width:780px) {
          padding-bottom: 12rem;

      }

    .hero_content {
      width:900px;
      h4 {
        font-size: 3rem;
      }
      
      @media (max-width:780px) {
        width:100%;
      }
    }
  }
  .hero_navbar,.hero_header,.hero_center {
    z-index:40;
    position: relative;
  }
  .login_btn {
    border: 1px solid #28A745;
    padding:1.2rem 2rem;
    border-radius: 6px;
    cursor:pointer;
    &:hover {
      opacity: .7;
    }
    &.btn_1 {
      background: #28A745;
    }
  }
`;
