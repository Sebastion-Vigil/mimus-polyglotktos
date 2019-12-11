import React, {Component} from 'react';

const Message = props => <div>{props.msg}</div>;

class App extends Component {
  render() {
    return (
      <div>
        <Message msg="A Generic Hello World Text" />
        <Message msg="Creating Reusable React Components" />
      </div>
    );
  }
}

export default App;