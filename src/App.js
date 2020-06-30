import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  
 
  render(){
    return (
      <div className="App">
        <div>
            A:{this.props.a}<span></span>
             {/* <button onClick={this.props.onAgeUp}>Up</button> */} 
             <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div>
            B:{this.props.b}<span></span>
            {/* <button onClick={this.props.onAgeUp}>Up</button> */}
            <button  onClick={()=>this.props.updateB(this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    // age: state.age
    a: state.rA.a,
    b: state.rB.b
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    // onAgeUp:()=> dispatch({type: 'AGE_UP'}),
    // onAgeDown:()=> dispatch({type: "AGE_DOWN"})
    updateA:(b)=> dispatch({type: 'UPDATE_A', b:b}),
    updateB:(a)=> dispatch({type: 'UPDATE_B', a:a})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
