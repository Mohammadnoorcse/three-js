
import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { useRef, useState } from 'react'

const Cube = ({position,size,color}) => {
  const ref = useRef();
  useFrame((state,delta)=>{
    ref.current.rotation.x +=delta;
    ref.current.rotation.y +=delta;
   ref.current.position.z = 2;
  })

  return(
    <mesh position={position} ref={ref}>
    <boxGeometry args={size}/>
    <meshBasicMaterial color={color}/>
  </mesh>
  )
}

const Sphere = ({position,size,color}) =>{
  const ref = useRef();
  const[isHovered,setIsHovered] = useState(false);


  useFrame((state,delta)=>{
    // ref.current.rotation.x +=delta;
    ref.current.rotation.y +=delta * 0.2;
  //  ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  })
  return(
    <mesh 
    position={position}
    ref={ref}
    onPointerEnter={(event)=>(event.stopPropagation(),setIsHovered(true))}
    >
      <sphereGeometry args={size}/>
      <meshStandardMaterial color={isHovered ?color:"lightblue"} wireframe/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas>
      {/* <directionalLight position={[0,0,2]}/> */}
      <ambientLight/>
     {/* <Cube position={[1,0,0]} color={"green"} size={[1,1,1]}/>
     <Cube position={[-1,0,0]} color={"green"} size={[1,1,1]}/>
     <Cube position={[-1,2,0]} color={"green"} size={[1,1,1]}/>
     <Cube position={[1,2,0]} color={"green"} size={[1,1,1]}/> */}
      {/* <mesh position={[-1,0,0]}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"}/>
      </mesh>
      <mesh position={[-1,2,0]}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"}/>
      </mesh>
      <mesh position={[1,2,0]}>
        <boxGeometry />
        <meshBasicMaterial color={"orange"}/>
      </mesh> */}

      <Sphere position={[0,0,0]} args={[1,30,31]} color={"green"}/>
    </Canvas>
  )
}

export default App
