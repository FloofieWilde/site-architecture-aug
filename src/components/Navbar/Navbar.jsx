import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
        <LogoContainer className='nav left'>
          <NavLink to="">
            <img src="./Logo UGA.png" alt="logo" />
          </NavLink>
        </LogoContainer>
        <NavRight className='nav right'>
          <NavLinkStyled to="context" activeClassName="active">
            <p>Contexte</p>
          </NavLinkStyled>
          <NavLinkStyled to='activities' activeClassName="active">
            <p>Activités</p>
          </NavLinkStyled>
          <NavLinkStyled to='fresque' activeClassName="active">
            <p>Fresque</p>
          </NavLinkStyled>
        </NavRight>
    </Nav>
  )
}

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: var(--content-primary);
    transform: rotate(30deg);
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--background-secondary);
      >p {
        color: var(--content-primary) !important;
      }
    }
    
    &.active {
      background-color: var(--background-accent-bis);
      >p {
        color: var(--content-primary-reverse) !important;
      }
    }

    >p {
      transform: rotate(-30deg);
      margin: 0px 10px;
    }
`

const Nav = styled.div`
    width: 100%;
    background-color: var(--background-accent);

    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 10px 40px;

    font-weight: 600;
    font-size: 1.2rem;

    overflow: hidden;
`

const NavRight = styled.div`
    display: flex;
    gap: 15px;
`

const LogoContainer = styled.div`
  background-color: var(--background-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  > a > img {
    height: 30px;
  }
`

export default Navbar