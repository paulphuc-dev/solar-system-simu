import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, ShaderMaterial, Mesh, FrontSide } from 'three'
import sunTexture from '../assets/imgs/sun_surface.jpg'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D sunTex;
  uniform float time;

  // Simplex or Perlin noise function (đơn giản)
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec4 texColor = texture2D(sunTex, vUv);
    float noise = random(vUv * time * 10.0);
    // Pha trộn texture với noise để tạo hiệu ứng "bập bùng"
    vec3 color = texColor.rgb + vec3(noise * 0.2, noise * 0.1, 0.0);
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function Sun() {
  const sunRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, sunTexture)
  const materialRef = useRef<ShaderMaterial>(null!)

  useFrame(({ clock }) => {
    if (sunRef.current && materialRef.current) {
      sunRef.current.rotation.y += 0.002
      materialRef.current.uniforms.time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[20, 128, 128]} />
      <meshStandardMaterial
        map = {texture}
        emissive="#ffff33"
        emissiveIntensity={2}
      />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          sunTex: { value: texture },
          time: { value: 0 },
        }}
        transparent={false}
        depthWrite={true}
        depthTest={true}
        side={FrontSide}
      />
    </mesh>
  )
}
