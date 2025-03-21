/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 DamagedHelmet.gltf --transform -t 
Files: DamagedHelmet.gltf [5.03MB] > /Users/cosmo/react-three/public/DamagedHelmet-transformed.glb [652.26KB] (87%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { JSX } from "react";

type GLTFResult = GLTF & {
  nodes: {
    ["node_damagedHelmet_-6514"]: THREE.Mesh;
  };
  materials: {
    Material_MR: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/DamagedHelmet-transformed.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes["node_damagedHelmet_-6514"].geometry}
        material={materials.Material_MR}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/DamagedHelmet-transformed.glb");
