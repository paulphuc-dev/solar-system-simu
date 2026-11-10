import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, ShaderMaterial, Mesh, Group, FrontSide } from 'three'
import earthTexture from '../assets/imgs/earth_surface.jpg'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D earthTex;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec4 texColor = texture2D(earthTex, vUv);
    float noise = random(vUv * time * 10.0);
    vec3 color = texColor.rgb + vec3(noise * 0.05, noise * 0.05, noise * 0.05);
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Earth() {
  const groupRef = useRef<Group>(null!)
  const earthRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, earthTexture)
  const materialRef = useRef<ShaderMaterial>(null!)
  const orbitRef = useRef<Mesh>(null!)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (groupRef.current && earthRef.current && materialRef.current) {
      groupRef.current.rotation.y = elapsed * 0.7 // tốc độ quỹ đạo (tăng giảm được)
      earthRef.current.rotation.y += 0.1
      materialRef.current.uniforms.time.value = elapsed
    }
  })

  return (
    <group ref={groupRef} position={[0, 5, 0]}>
      {/* Trái Đất đặt cách Mặt Trời 6 đơn vị theo trục X */}
      <mesh ref={earthRef} position={[70, 0, 0]}>
        <sphereGeometry args={[5, 128, 128]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            earthTex: { value: texture },
            time: { value: 0 },
          }}
          transparent={false}
          depthWrite={true}
          depthTest={true}
          side={FrontSide}
        />
      </mesh>

      {/* Quỹ đạo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} ref={orbitRef}>
        <ringGeometry args={[69.8, 70.5, 128]} />
        <meshBasicMaterial color="white" opacity={0.2} transparent />
      </mesh>
    </group>
  )
}
