import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import { David } from '../components/David'
import { Dav } from '../components/Dav'
import { Pau } from '../components/Pau'
import styles from './Index.module.css'

const estilos = {

  color: '#dfac12',
  // margin:'11px 11px',
  // position: 'absolute'

}



const Home: NextPage = () => {

  // let escala = 1
  // let x = window.matchMedia("(max-width:1004px)")

  // function quer(x){
  //   if(x.matches){
  //     escala = .5
  //   }else{
  //     escala = 1
  //   }
  // }
  // x.addEventListener(quer)

  return (


    <main style={{border:'1px solid green', width:'95%', margin:'auto', height:'90vh'}}>
      <div className={styles.canvas} style={{backgroundColor: '#f5f5f5', width:'90%', height:'88%', border:'1px solid red'}}>
        {/* <div>
          <h1 style={{ position:'absolute'}}>Auxiliar Manipuladora</h1>
        </div> */}
        
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'44vh 44vh', gap:'1rem', border:'1px solid brown'}}>
          <Canvas
            style={{ width: '80%', height:'44%', margin:'auto', border:'2px solid black', backgroundColor:'orange'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 75 ,zoom: 6, position:[0, .5, 1.5]}} >
            {/* <focus-camera> */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {/* <directionalLight position={[-1, 0.5, 0]} /> */}
            <Suspense fallback={null}>
            {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
      
                <Dav
                  // className={styles.dav}
                  scale={.6}
                  position={[0,0.15,0]}
                  rotation={[Math.PI / 1000, 0, 0]}
                />
      
      
      
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
          <Canvas
            style={{ width: '80%', height:'44%',margin:'auto', border:'2px solid black', backgroundColor:'orange'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 75 ,zoom: 6, position:[0, .5, 1.5]}} >
            {/* <focus-camera> */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {/* <directionalLight position={[-1, 0.5, 0]} /> */}
            <Suspense fallback={null}>
            {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
                      <Pau
              scale={.6}
              position={[0,0.15,0]}
              rotation={[Math.PI / 1000, 0, 0]}
              />
      
      
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
          <Canvas
            style={{ width: '80%', height:'44%', margin:'auto', border:'2px solid black', backgroundColor:'orange'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 75 ,zoom: 6, position:[0, .5, 1.5]}} >
            {/* <focus-camera> */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {/* <directionalLight position={[-1, 0.5, 0]} /> */}
            <Suspense fallback={null}>
            {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
      
                <Dav
                  // className={styles.dav}
                  scale={.6}
                  position={[0,0.15,0]}
                  rotation={[Math.PI / 1000, 0, 0]}
                />
      
      
      
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
          <Canvas
            style={{ width: '80%', height:'44%', margin:'auto', border:'2px solid black', backgroundColor:'orange'}}
            camera={{view:
              {
                enabled: true,
                fullWidth: 100,
                fullHeight: 100,
                offsetX: 0,
                offsetY: -30,
                width: 100,
                height: 100,
              }
              ,  focus: 10, fov: 75 ,zoom: 6, position:[0, .5, 1.5]}} >
            {/* <focus-camera> */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} />
            {/* <directionalLight position={[-1, 0.5, 0]} /> */}
            <Suspense fallback={null}>
            {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
                      <Pau
              scale={.6}
              position={[0,0.15,0]}
              rotation={[Math.PI / 1000, 0, 0]}
              />
      
      
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={1} />
            <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
          </Canvas>
        </div>
        <div className={styles.container}>
          <h1 className={styles.titulo} style={estilos} >Auxiliar Manipuladora</h1>
        </div>
        <div className={styles.movil}>
          <h1 className={styles.telefono} style={estilos} >968 693 575</h1>
        </div>
      </div>
    </main>

  )
}



export default Home
