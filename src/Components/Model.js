import React, { useEffect, useRef } from "react";
import Expo from "expo";
import { View, StyleSheet, Animated, PanResponder } from "react-native";
import ExpoTHREE, { Renderer, loadTextureAsync } from "expo-three";
import { GLView } from "expo-gl";
import * as THREE from "three";
import { Asset } from "expo-asset";

const Model = () => {
  let timeout;
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const onContextCreate = async (gl) => {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        gl.drawingBufferWidth / gl.drawingBufferHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 2);

      //Lights
      const AO = new THREE.AmbientLight(0xfffffff, 0.5);
      const light = new THREE.PointLight(0xff0000, 0.5, 100);
      scene.add(AO);
      scene.add(light);

      gl.canvas = {
        width: gl.drawingBufferWidth,
        height: gl.drawingBufferHeight,
      };

      const renderer = new Renderer({ gl });
      renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

      const geometry = new THREE.SphereBufferGeometry(1, 36, 36);
      const material = new THREE.MeshBasicMaterial({
        map: await loadTextureAsync({
          asset: Asset.fromModule(require("../assets/texturep.jpg")),
        }),
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.y = 0.2;
      (sphere.scale.x = 0.7),
        (sphere.scale.y = 0.7),
        (sphere.scale.z = 0.7),
        scene.add(sphere);

      const render = () => {
        timeout = requestAnimationFrame(render);
        sphere.rotation.y -= 0.01;
        renderer.render(scene, camera);
        gl.endFrameEXP();
      };
      render();
    } catch (error) {
      console.error(error, "MODEL NOT WORKS");
    }
  };

  return (
    <View style={styles.Model__container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), { flex: 1 }]}
      >
        <GLView
          onContextCreate={onContextCreate}
          style={{ flex: 1, width: "100%", height: "100%" }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  Model__container: {
    width: "100%",
    height: "50%",
  },
});

export default Model;
