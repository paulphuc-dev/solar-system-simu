import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, ShaderMaterial, Mesh, Group, FrontSide } from 'three'
import marsTexture from '../assets/imgs/mars_surface.jpg'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D marsTex;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec4 texColor = texture2D(marsTex, vUv);
    float noise = random(vUv * time * 10.0);
    vec3 color = texColor.rgb + vec3(noise * 0.05, noise * 0.05, noise * 0.05);
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Mars() {
  const groupRef = useRef<Group>(null!)
  const marsRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, marsTexture)
  const materialRef = useRef<ShaderMaterial>(null!)
  const orbitRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (groupRef.current && marsRef.current && materialRef.current) {
      groupRef.current.rotation.y = elapsed * 0.6 
      marsRef.current.rotation.y += 0.085
      materialRef.current.uniforms.time.value = elapsed
    }
  })

  return (
    <group ref={groupRef} position={[0, 8, 0]}>
      <mesh ref={marsRef} position={[90, 0, 0]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            marsTex: { value: texture },
            time: { value: 0 },
          }}
          transparent={false}
          depthWrite={true}
          depthTest={true}
          side={FrontSide}
        />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} ref={orbitRef}>
        <ringGeometry args={[89.8, 90.2, 128]} /> {/* ring mỏng, bán kính ~40 */}
        <meshBasicMaterial color="white" opacity={0.2} transparent />
      </mesh>
    </group>
  )
}
