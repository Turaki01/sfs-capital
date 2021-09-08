import React from 'react'
import { CustomButtonContainer } from './styles'

interface ButtonProps {
    children: React.ReactNode,
    disabled?: boolean,
    type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({
    children,
    type,
    disabled,
    ...otherprops
}) => {
    return (
        <CustomButtonContainer disabled={disabled} type={type} {...otherprops}>
            {children}
        </CustomButtonContainer>
    )
}

export default Button