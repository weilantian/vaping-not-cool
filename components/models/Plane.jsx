function Plane(props) {
  const [ref] = usePlane(() => ({ ...props }), useRef < Mesh > null);
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[5, 5]} />
      <shadowMaterial color="#171717" />
    </mesh>
  );
}

export default Plane;
