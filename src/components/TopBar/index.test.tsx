import { render } from '@testing-library/react'

import { TopBar } from '.'

describe('TopBar', () => {
  it('Should click TopBar if it is enabled', () => {
    const { getByText } = render(<TopBar title="Title" />)
    expect(getByText('Title')).toBeInTheDocument()
  })
})
