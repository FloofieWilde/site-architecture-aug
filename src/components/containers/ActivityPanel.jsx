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


    .panelTitle {
      position: absolute;
    }

    .panelContent {
      opacity: 0;
      transition: all 0.5s ease-in-out;
      padding: 0 40px;
      font-size: .1rem;
      font-weight: 100;
    }

    &:hover {
    flex: 4;

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
      }
    }
`