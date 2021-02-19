import React from 'react';
import ReactDom from 'react-dom';
import MainTopbar from './components/Main/topbar'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="page">
        <MainTopbar />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))