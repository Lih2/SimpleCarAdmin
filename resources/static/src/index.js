import React from 'react';
import ReactDOM from 'react-dom';

class Helloworld extends React.Component {
  render() {
    return <h1>Hello World!!! {this.props.year}</h1>;
  }
}

ReactDOM.render(
  <Helloworld year="2018"/>,
  document.getElementById('helloworld')
);