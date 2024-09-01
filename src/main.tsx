import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'


function MouseFollow (){
  const [state,setState]=useState(false);
  const [position,setPositon]=useState({x:0,y:0})
  


  useEffect(()=>{
    

    const handleMove =(e:MouseEvent)=>{
      setPositon({x:e.pageX,y:e.pageY});
    }


    if(state) {
      window.addEventListener('mousemove',handleMove)
    }

    //LAS SUSCRIPCIONES LAS TENEMOS QUE LIMPIAR
    return ()=>{
      //esto se ejecuta cuando se desmonta el componente del dom tambien se ejecuta cuando cambie la dependencia

      window.removeEventListener('mousemove',handleMove)
    }
  },[state])


  return (
    <>
    <div 
      style={{
        position: "absolute",
        boxShadow:'0px 0px 50px #09f',
        backgroundColor:"#09f",
        borderRadius:'50%',
        opacity:0.5,
        padding:20,
        pointerEvents:'none',
        left:-20,
        top:-20,
        width:40,
        height: 40,
        transform:`translate(${position.x}px,${position.y}px)`
      }}
    >
      
    </div>
    <button onClick={()=>setState(!state)}>{state ? "following" :"follow"} pointer</button>
    </>




  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  //el react.strckmosde nos sirve para  saber si estamos haciendo algo mal osea si estamos escribiendo codigo antiguo de react es como el useStrict de js pero para react osea esto nos ayuda a desarrollar pero esto en produccion no  funciona solo es para el desarrollo
  <React.StrictMode>{/*<==no funciona en produccion esto es para desarrollo*/}
    <MouseFollow />
  </React.StrictMode>
)



