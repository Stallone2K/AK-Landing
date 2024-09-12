"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    HUG_ARMCHAIRHUG_Armchair_602_014: THREE.Mesh;
  };
  materials: {
    Base: THREE.MeshStandardMaterial;
  };
};

export default function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./Chair.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
        material={materials.Base}
        position={[0, 40.986, 0]}
        scale={43.314}
      />
    </group>
  );
}

useGLTF.preload("./Chair.glb");
