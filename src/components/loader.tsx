import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
<<<<<<< HEAD
  return <Html center>{progress} % loaded</Html>;
=======
  return <Html center>{progress.toFixed(2)} % loaded</Html>;
>>>>>>> example
}
