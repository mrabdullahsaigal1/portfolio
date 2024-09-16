import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from 'hooks';
import { useEffect, useRef, lazy, Suspense } from 'react';
import { media, rgbToThreeColor } from 'utils/style';
import { cleanRenderer, cleanScene, removeLights } from 'utils/three';
import styles from './DisplacementSphere.module.css';
import fragShader from './displacementSphereFragment.glsl';
import vertShader from './displacementSphereVertex.glsl';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

// Lazy load Three.js modules
const ThreeModules = lazy(() => import('./ThreeModules'));

export const DisplacementSphere = props => {
  const theme = useTheme();
  const { rgbBackground, themeId, colorWhite } = theme;
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const mouse = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const lights = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  // Function to position the sphere based on window size
  const positionSphere = (width, height) => {
    if (sphere.current) {
      if (width <= media.mobile) {
        sphere.current.position.x = 14;
        sphere.current.position.y = 10;
      } else if (width <= media.tablet) {
        sphere.current.position.x = 18;
        sphere.current.position.y = 14;
      } else {
        sphere.current.position.x = 22;
        sphere.current.position.y = 16;
      }
    }
  };

  useEffect(() => {
    import('./ThreeModules').then(THREE => {
      const { innerWidth, innerHeight } = window;
      mouse.current = new THREE.Vector2(0.8, 0.5);
      renderer.current = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true,
      });
      renderer.current.setSize(innerWidth, innerHeight);
      renderer.current.setPixelRatio(1);
      renderer.current.outputEncoding = THREE.sRGBEncoding;

      camera.current = new THREE.PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
      camera.current.position.z = 52;

      scene.current = new THREE.Scene();

      material.current = new THREE.MeshPhongMaterial();
      material.current.onBeforeCompile = shader => {
        uniforms.current = THREE.UniformsUtils.merge([
          shader.uniforms,
          { time: { type: 'f', value: 0 } },
        ]);

        shader.uniforms = uniforms.current;
        shader.vertexShader = vertShader;
        shader.fragmentShader = fragShader;
      };

      geometry.current = new THREE.SphereBufferGeometry(32, 64, 64);
      sphere.current = new THREE.Mesh(geometry.current, material.current);
      sphere.current.position.z = 0;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);

      // Position the sphere initially
      positionSphere(innerWidth, innerHeight);
    });

    return () => {
      if (scene.current) cleanScene(scene.current);
      if (renderer.current) cleanRenderer(renderer.current);
    };
  }, []);

  useEffect(() => {
    import('./ThreeModules').then(THREE => {
      const dirLight = new THREE.DirectionalLight(colorWhite, 0.3);
      const ambientLight = new THREE.AmbientLight(colorWhite, themeId === 'light' ? 0.5 : 0.05);

      dirLight.position.z = 200;
      dirLight.position.x = 100;
      dirLight.position.y = 100;

      lights.current = [dirLight, ambientLight];
      scene.current.background = new THREE.Color(...rgbToThreeColor(rgbBackground));
      lights.current.forEach(light => scene.current.add(light));
    });

    return () => {
      if (lights.current) removeLights(lights.current);
    };
  }, [rgbBackground, colorWhite, themeId]);

  useEffect(() => {
    const { width, height } = windowSize;

    const adjustedHeight = height + height * 0.3;
    if (renderer.current) {
      renderer.current.setSize(width, adjustedHeight);
      if (camera.current) {
        camera.current.aspect = width / adjustedHeight;
        camera.current.updateProjectionMatrix();
      }

      // Render a single frame on resize when not animating
      if (reduceMotion && scene.current && camera.current) {
        renderer.current.render(scene.current, camera.current);
      }

      // Position the sphere on resize
      positionSphere(width, height);
    }
  }, [reduceMotion, windowSize]);

  useEffect(() => {
    const onMouseMove = event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    };

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  useEffect(() => {
    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      if (sphere.current) {
        sphere.current.rotation.z += 0.001;
        sphere.current.rotation.x = rotationX.get();
        sphere.current.rotation.y = rotationY.get();
      }

      if (renderer.current && scene.current && camera.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else if (renderer.current && scene.current && camera.current) {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Transition in timeout={3000}>
        {visible => (
          <canvas
            aria-hidden
            className={styles.canvas}
            data-visible={visible}
            ref={canvasRef}
            {...props}
          />
        )}
      </Transition>
    </Suspense>
  );
};
