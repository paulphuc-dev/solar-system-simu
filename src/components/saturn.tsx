import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, ShaderMaterial, Mesh, Group, FrontSide } from 'three'
import saturnTexture from '../assets/imgs/saturn_surface.jpg'
import ringTexture from '../assets/imgs/saturn_ring.png' // dùng texture PNG chất lượng cao

// Shader đơn giản cho bề mặt Saturn
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D saturnTex;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec4 texColor = texture2D(saturnTex, vUv);
    float noise = random(vUv * time * 10.0);
    vec3 color = texColor.rgb + vec3(noise*0.03, noise*0.03, noise*0.03);
    gl_FragColor = vec4(color,1.0);
  }
`

export default function SaturnWithRing() {
  const groupRef = useRef<Group>(null!)
  const saturnRef = useRef<Mesh>(null!)
  const materialRef = useRef<ShaderMaterial>(null!)
  const orbitRef = useRef<Mesh>(null!)

  const saturnMap = useLoader(TextureLoader, saturnTexture)
  const ringMap = useLoader(TextureLoader, ringTexture)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (groupRef.current && saturnRef.current && materialRef.current) {
      // Quay quanh Mặt Trời
      groupRef.current.rotation.y = elapsed * 0.4

      // Sao Thổ tự quay quanh trục
      saturnRef.current.rotation.y += 0.14

      // Shader thời gian
      materialRef.current.uniforms.time.value = elapsed
    }
  })

  return (
    <group ref={groupRef} position={[0, 13, 0]}>
      <group>
        {/* Sao Thổ */}
        <mesh ref={saturnRef} position={[125, 0, 0]}>
          <sphereGeometry args={[7.5, 64, 64]} />
          <shaderMaterial
            ref={materialRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              saturnTex: { value: saturnMap },
              time: { value: 0 },
            }}
            transparent={false}
            depthWrite={true}
            depthTest={true}
            side={FrontSide}
          />
        </mesh>

        {/* Vòng đai chính */}
        <mesh position={[125, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[9, 14, 128]} /> {/* segments cao → mịn */}
          <meshBasicMaterial
            map={ringMap}
            color={0xfff4e1}       // ánh vàng nhạt
            side={2}               // DoubleSide
            transparent
            opacity={0.9}          // sáng, hơi trong suốt
          />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} ref={orbitRef}>
          <ringGeometry args={[124.8, 125.2, 128]} /> {/* ring mỏng, bán kính ~40 */}
          <meshBasicMaterial color="white" opacity={0.2} transparent />
        </mesh>
      </group>
    </group>
  )
}
