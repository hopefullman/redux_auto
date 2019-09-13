import React,{Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {INIT_ACTION,VALUE_ACTION,SUB_ACTION,DEL_ACTION} from './store/actionCreate';
import axios from 'axios';
class TodoListUI extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
  }
  render(){
    return (
    <div className="App">
      <input value={this.props.value} onChange={this.props.onchange.bind(this)}/>
      <button onClick={this.props.onclick.bind(this)}>添加</button>
      {
        this.props.list.map((item,index)=>{
          return (
            <div key={index} onClick={()=>this.props.delet(index)}>{item}</div>
          )
        })
      }
    </div>
  );
  }
}


export default TodoListUI;