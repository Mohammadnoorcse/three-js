import { Float, OrbitControls } from "@react-three/drei"
import Background from "./Background"
import Airplane from "./Airplane"


const Experience = () => {
  return (
    <>
     <OrbitControls/>
     <Background/>
     {/* <mesh>
        <boxGeometry/>
        <meshNormalMaterial/>
     </mesh> */}

     <Float floatIntensity={2} speed={2}>
        <Airplane rotation-y={Math.PI / 2}
              scale={[0.2, 0.2, 0.2]}
              position-y={0.1}/>
     </Float>

    
    
    </>
  )
}

export default Experience