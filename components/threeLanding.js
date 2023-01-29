/**
 * @file threeLanding.js
 * @author Devin Arena
 * @description A landing widget with a 3D rubik's cube.
 * @since 4/29/2022
 **/

import { Box, position } from "@chakra-ui/react";
import { useTexture } from "@react-three/drei";
import { useThree, Canvas, useFrame } from "@react-three/fiber";
import { memo, useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import css from "./styles/images.module.css";

const ThreeLanding = (props) => {
  const Controls = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 2.25;
      controls.maxDistance = 15;
      controls.enablePan = false;
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <Box sx={{ width: "70%", height: "40vh" }}>
      <Canvas
        shadows={true}
        className={css.threeCanvas}
        camera={{
          position: [1.5, 1.5, 1.5],
        }}
      >
        <Controls />
        <ambientLight color={"white"} intensity={1} />
        <Cube position={[-10, -10, -10]} />
      </Canvas>
    </Box>
  );
};

const Cube = (props) => {
  const states = ["solved", "solved", "scrambled", "scrambled", "checkerboard"];
  const state = states[Math.floor(Math.random() * states.length)];

  let front = useTexture(`/images/cubestates/${state}_front.png`);
  let right = useTexture(`/images/cubestates/${state}_right.png`);
  let back = useTexture(`/images/cubestates/${state}_back.png`);
  let left = useTexture(`/images/cubestates/${state}_left.png`);
  let bottom = useTexture(`/images/cubestates/${state}_bottom.png`);
  let top = useTexture(`/images/cubestates/${state}_top.png`);

  const cube = useRef();

  useFrame(() => {
    if (cube.current) {
      cube.current.rotation.y += 0.01;
      if (cube.current.position.x < 0) {
        cube.current.position.x += 0.2;
        cube.current.position.x = Math.min(cube.current.position.x, 0);
      }
      if (cube.current.position.y < 0) {
        cube.current.position.y += 0.2;
        cube.current.position.y = Math.min(cube.current.position.y, 0);
      } 
      if (cube.current.position.z < 0) {
        cube.current.position.z += 0.2;
        cube.current.position.z = Math.min(cube.current.position.z, 0);
      }
    }
  });

  return (
    <mesh ref={cube} {...props}>
      <boxGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial attach="material-0" map={front} />
      <meshStandardMaterial attach="material-1" map={back} />
      <meshStandardMaterial attach="material-2" map={top} />
      <meshStandardMaterial attach="material-3" map={bottom} />
      <meshStandardMaterial attach="material-4" map={left} />
      <meshStandardMaterial attach="material-5" map={right} />
    </mesh>
  );
};

export default memo(ThreeLanding);
