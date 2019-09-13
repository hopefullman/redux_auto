// import React,{Component} from 'react';
// import logo from './logo.svg';
// import {connect} from 'react-redux';
// class TodoList extends Component {
//   constructor(props){
//     super(props);
//     this.state={

//     }
//   }
//   render(){
//     return (
//     <div className="App">
//       <input value={this.props.value} onChange={this.props.onchange.bind(this)}/>
//       <button onClick={this.props.onclick.bind(this)}>添加</button>
//       {
//         this.props.list.map((item,index)=>{
//           return (
//             <div key={index} onClick={this.props.delet.bind(this,index)}>{item}</div>
//           )
//         })
//       }
//     </div>
//   );
//   }
// }
// const mapStateToProps=(state)=>{
//   return {
//    value:state.value,
//    list:state.list
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     onchange(e){
//       let value=e.target.value;
//       const action={
//         type:'value',
//         value:value
//       }
//       dispatch(action)
//     },
//     onclick(){
//       const action={
//         type:'sub'
//       }
//       dispatch(action)
//     },
//     delet(index){
//       const action={
//         type:'del',
//         index:index
//       }
//       dispatch(action);
//     }

//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
import React,{Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {INIT_ACTION,VALUE_ACTION,SUB_ACTION,DEL_ACTION} from './store/actionCreate';
import axios from 'axios';
import TodoListUI from './TodoListUI'
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    this.props.init()
  }
  render(){
    return (
    <div className="App">
  {/*<input value={this.props.value} onChange={this.props.onchange.bind(this)}/>
      <button onClick={this.props.onclick.bind(this)}>添加</button>
      {
        this.props.list.map((item,index)=>{
          return (
            <div key={index} onClick={this.props.delet.bind(this,index)}>{item}</div>
          )
        })
      }*/}
      
      <TodoListUI value={this.props.value} list={this.props.list} onchange={this.props.onchange.bind(this)} onclick={this.props.onclick.bind(this)} delet={this.props.delet.bind(this)}/>
    </div>
  );
  }
}
const mapStateToProps=(state)=>{
  return {
   value:state.value,
   list:state.list
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onchange(e){
      let value=e.target.value;
      const action=VALUE_ACTION(value)
      dispatch(action)
    },
    onclick(){
      const action=SUB_ACTION()
      dispatch(action)
    },
    delet(index){
      const action=DEL_ACTION(index)
      dispatch(action);
    },
    init(){
      const action=INIT_ACTION();
      dispatch(action)
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);