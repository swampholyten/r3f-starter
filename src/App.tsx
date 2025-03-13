import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Layers3Icon, CuboidIcon as CubeIcon, BoxIcon } from "lucide-react";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">React Three Fiber Starter</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A quick-start template for r3f-app
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="outline" className="text-sm">
            React
          </Badge>
          <Badge variant="outline" className="text-sm">
            TypeScript
          </Badge>
          <Badge variant="outline" className="text-sm">
            React Three Fiber
          </Badge>
          <Badge variant="outline" className="text-sm">
            React Three Drei
          </Badge>
          <Badge variant="outline" className="text-sm">
            Tailwind CSS
          </Badge>
          <Badge variant="outline" className="text-sm">
            Zustand
          </Badge>
          <Badge variant="outline" className="text-sm">
            Shadcn UI
          </Badge>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border mb-8">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#0070f3" />
            </mesh>
          </Float>

          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CubeIcon className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>React Three Fiber</CardTitle>
            <CardDescription>A React renderer for Three.js</CardDescription>
          </CardHeader>
          <CardContent>
            Build 3D scenes declaratively with React components and hooks.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BoxIcon className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>React Three Drei</CardTitle>
            <CardDescription>Useful helpers for R3F</CardDescription>
          </CardHeader>
          <CardContent>
            A collection of helpers and fully functional components for React
            Three Fiber.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Layers3Icon className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Zustand</CardTitle>
            <CardDescription>State management</CardDescription>
          </CardHeader>
          <CardContent>
            A small, fast and scalable state-management solution using
            simplified flux principles.
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="mt-4 text-sm text-muted-foreground">
          Built with React, TypeScript, and React Three Fiber
        </p>
      </footer>
    </main>
  );
}
