import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('Should click button if it is enabled', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Test Enabled</Button>)
    fireEvent.click(screen.getByText('Test Enabled'))
    expect(onClick).toHaveBeenCalled()
  })

  it('Should not click button if it is disabled', () => {
    const onClick = jest.fn()
    render(
      <Button disabled onClick={onClick}>
        Test Disabled
      </Button>,
    )
    fireEvent.click(screen.getByText('Test Disabled'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
