import * as React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  title: string
}

const StyledTopBar = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  height: 24px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-bottom: 8px;
`

/**
 * Main UI element for navigation and auth actions
 */
export const TopBar = ({ title }: Props) => (
  <StyledTopBar>
    {title}
  </StyledTopBar>
)
