
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

export function ParticleTrail({ count = 200 }) {
  const pointsRef = useRef();
  const mouse = useRef([0, 0]);

  // Track mouse position
  window.addEventListener("mousemove", (e) => {
    mouse.current = [
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
    ];
  });

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame(() => {
    const pos = pointsRef.current.geometry.attributes.position.array;

    // Shift positions back (creates tail)
    for (let i = count - 1; i > 0; i--) {
      pos[i * 3] = pos[(i - 1) * 3];
      pos[i * 3 + 1] = pos[(i - 1) * 3 + 1];
      pos[i * 3 + 2] = 0;
    }

    // Leading particle follows mouse
    pos[0] = mouse.current[0] * 3;
    pos[1] = mouse.current[1] * 3;
    pos[2] = 0;

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.06}
        color="#fff"
        transparent
        opacity={0.9}
      />
    </points>
  );
}
