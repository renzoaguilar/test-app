import React from 'react';
import './App.css';

/*function Helloword(props) {
  return(
    <h1>Hello {props.text}</h1>
  );
}*/

class Helloword extends React.Component {
  state = {
    show : true
  }

  toggleShow  = () => {
    this.setState({show:false})
  }

  render(){
    return(
      <div>
        <h1>Hello {this.props.text}</h1>
        <button onClick={this.toggleShow}>Toggle Show</button>
      </div> 
    );
  }
}

function App() {
  return (
    <div>
      This is a component:
      <Helloword text="Renzo"/>
      <Helloword text="People"/>
      <Helloword text="work"/>
    </div>
  );
}

export default App;
