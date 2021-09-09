import React from 'react'
import { HeaderNavContainer, NavLogoContainer } from './styles'

import Logo from "../../assets/svg/logo.svg"
import { LinkButton, PrimaryButton } from 'pages/Auth/styles'

interface HeaderProps  {
    login: Function
}

const AppHeader: React.FC<HeaderProps> = ({
    login
}) => {
    return (
        <HeaderNavContainer>
            <NavLogoContainer>
                <img src={Logo} alt="Logo" />
            </NavLogoContainer>
            <div>
                <LinkButton onClick={() => login()}>Login</LinkButton>
                <PrimaryButton onClick={() => login()}>Signup</PrimaryButton>
            </div>
        </HeaderNavContainer>
    )
}

export default AppHeader
