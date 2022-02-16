import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeAction'


function NewCakeComponent(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
       <h2>Passing Payloads with actionCreators</h2>
       <h2>Number Of Cakes:{props.numOfCakes}</h2>
       <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
       <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )

}


const mapStateToProps=(state)=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
       buyCake:number=>{dispatch(buyCake(number))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeComponent)