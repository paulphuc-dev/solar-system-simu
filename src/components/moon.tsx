import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, ShaderMaterial, Mesh, Group, FrontSide } from 'three'
import moonTexture from '../assets/imgs/moon_surface.jpg'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D moonTex;
  uniform float time;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec4 texColor = texture2D(moonTex, vUv);
    float noise = random(vUv * time * 10.0);
    vec3 color = texColor.rgb + vec3(noise * 0.05, noise * 0.05, noise * 0.05);
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Moon() {
  const groupRef = useRef<Group>(null!)
  const moonRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, moonTexture)
  const materialRef = useRef<ShaderMaterial>(null!)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (groupRef.current && moonRef.current && materialRef.current) {
      groupRef.current.rotation.y = elapsed * 0.7 // tốc độ quỹ đạo (tăng giảm được)
      moonRef.current.rotation.y += 0.005
      materialRef.current.uniforms.time.value = elapsed
    }
  })

  return (
    <group ref={groupRef} position={[0, 5, 0]}>
      <mesh ref={moonRef} position={[80, 0, 0]}>
        <sphereGeometry args={[2.55, 128, 128]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            moonTex: { value: texture },
            time: { value: 0 },
          }}
          transparent={false}
          depthWrite={true}
          depthTest={true}
          side={FrontSide}
        />
      </mesh>
    </group>
  )
}
