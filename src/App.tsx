import * as React from 'react'

import { Button } from './components/Button/Button'

interface Props {}

class App extends React.Component<Props> {
  render() {
    return <Button primary>Hello, world!</Button>
  }
}

export default App
