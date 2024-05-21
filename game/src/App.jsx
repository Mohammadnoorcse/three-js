import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"



const App = () => {
  return (
    <>
     <Canvas>
      <color attach="background" args={["#ececec"]}/>
    
       <Experience/>
     </Canvas>
     <h1>hii</h1>
    </>
  )
}

export default App