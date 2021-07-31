import React from 'react';
import styled, { css } from 'styled-components'

interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: string;
  /**
   * Optional disabled flag
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${(props: Props) => props.primary && css`
    color: white;
    background-color: black;
  `}
  ${(props: Props) => !props.primary && css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}
  ${(props: Props) => props.size === 'small' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
  ${(props: Props) => props.size === 'medium' && css`
    font-size: 14px;
    padding: 11px 20px;
  `}
  ${(props: Props) => props.size === 'large' && css`
    font-size: 16px;
    padding: 12px 24px;
  `}
  ${(props: Props) => props.disabled && css`
    cursor: default;
    color: #d9d9d9;
    background-color: white;
  `}
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', children, ...props }: Props) => (
  <StyledButton type="button" className="button" primary={primary} size={size} {...props}>{children}</StyledButton>
)