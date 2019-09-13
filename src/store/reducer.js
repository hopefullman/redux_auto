// const defaultState={
// 	value:'',
// 	list:[]
// }
// export default (state=defaultState,action)=>{
// 	if (action.type==='value') {
// 		const newState=JSON.parse(JSON.stringify(state));
// 		newState.value=action.value;
// 		return newState;
// 	};
// 	if (action.type==='sub') {
// 		const newState=JSON.parse(JSON.stringify(state));
// 		newState.list.push(newState.value);
// 		newState.value='';
// 		return newState;
// 	};
// 	if (action.type==='del') {
// 		const newState=JSON.parse(JSON.stringify(state));
// 		newState.list.splice(action.index,1);
// 		return newState;
// 	};
// 	return state;
// }
import {INIT,VALUE,SUB,DEL} from './actionType';
const defaultState={
	value:'',
	list:[]
}
export default (state=defaultState,action)=>{
	if (action.type===INIT) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(action.list);
		return newState;
	};
	if (action.type===VALUE) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.value=action.value;
		return newState;
	};
	if (action.type===SUB) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.push(newState.value);
		newState.value='';
		return newState;
	};
	if (action.type===DEL) {
		const newState=JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState;
	};
	return state;
}
