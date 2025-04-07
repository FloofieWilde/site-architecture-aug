import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Overlay = () => {
  return (
    <Navbar>
        <NavLink to="">Logo</NavLink>
        <NavLink>Contextualisation</NavLink>
        <NavLink to='activities'>Activités</NavLink>
        <NavLink to='fresque'>Fresque</NavLink>
    </Navbar>
  )
}

const Navbar = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--background-primary);

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    padding: 10px 40px;
`

export default Overlay