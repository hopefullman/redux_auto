import {INIT,VALUE,SUB,DEL} from './actionType';
import axios from 'axios';
export const INIT_ACTION=()=>{
	return (dispatch)=>{
		axios.get('/list.json')
      	.then((res)=>{
	        const action=INIT_LIST_ACTION(res.data)
	        dispatch(action)
      	})
    	.catch(err=>console.log(err))
	}
}
export const INIT_LIST_ACTION=(list)=>{
	return {
		type:INIT,
		list:list
	}
}
export const VALUE_ACTION=(value)=>{
	return {
		type:VALUE,
		value:value
	}
}
export const SUB_ACTION=()=>{
	return {
		type:SUB,
	}
}
export const DEL_ACTION=(index)=>{
	return {
		type:DEL,
		index:index
	}
}