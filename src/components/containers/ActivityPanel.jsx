import styled from "styled-components";

export const ActivityPanel = styled.div`
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: auto;
    flex: 1;
    position: relative;
    flex-direction: column;
    text-align: center;

    height: 100%;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    color: var(--content-primary-reverse);

    .imageOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }

    .panelTitle {
      position: absolute;
      font-size: 1.8rem;
      background-color: var(--background-accent-bis);
      padding: 10px 20px;
      transition: all 0.3s ease-in-out;
    }

    .panelContent {
      opacity: 0;
      transition: all 0.5s ease-in-out;
      padding: 20px 40px;
      font-size: .1rem;
      font-weight: 100;
      height: 100%;
      overflow-y: scroll;

      scrollbar-width: thin;
      scrollbar-color: var(--background-accent-bis) rgba(0, 0, 0, 0.2);
      scrollbar-arrow-color: white;
    }

    &:hover {
      flex: 4;
      box-shadow: -15px 0px 20px rgba(0, 0, 0, 0.6), 15px 0px 20px rgba(0, 0, 0, 0.6);
      z-index: 1;

      >.imageOverlay {
        transition: all 0.5s ease-in-out;
        background-color: rgba(0, 0, 0, 0.5);
      }

      >.panelTitle {
        transition: all 0.3s ease-in-out;
        opacity: 0;
      }
      >.panelContent {
        transition: all 0.5s ease-in-out;
        opacity: 1;
        font-size: 1.3rem;
        font-weight: 600;
        display: inline-flex;
        flex-direction: column;
        z-index: 2;
      }
    }
`