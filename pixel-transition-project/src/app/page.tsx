import Image from "next/image";
import PixelTransition from "@/components/PixelTransition";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8 bg-white dark:bg-black">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={150}
            height={30}
            priority
          />
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-zinc-50">
            PixelTransition Demo
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Hover over the cards below to see the pixel transition effect in action
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          
          {/* Card 1 - Text Transition */}
          <PixelTransition
            className="w-full h-64 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            firstContent={
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Hover Me!</h3>
                  <p className="text-blue-100">Watch the pixels dance</p>
                </div>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Magic! ✨</h3>
                  <p className="text-green-100">Pixel transition complete</p>
                </div>
              </div>
            }
            gridSize={8}
            pixelColor="#000"
            animationStepDuration={0.4}
          />

          {/* Card 2 - Image-like Transition */}
          <PixelTransition
            className="w-full h-64 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            firstContent={
              <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold">Creative</h3>
                </div>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold">Innovative</h3>
                </div>
              </div>
            }
            gridSize={10}
            pixelColor="#fff"
            animationStepDuration={0.5}
          />

          {/* Card 3 - One-time transition */}
          <PixelTransition
            className="w-full h-64 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            firstContent={
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Click Me!</h3>
                  <p className="text-indigo-100">One-time effect</p>
                </div>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Revealed! 🎯</h3>
                  <p className="text-purple-100">This stays visible</p>
                </div>
              </div>
            }
            gridSize={6}
            pixelColor="#8b5cf6"
            animationStepDuration={0.6}
            once={true}
          />

          {/* Card 4 - Fast transition */}
          <PixelTransition
            className="w-full h-64 cursor-pointer rounded-lg overflow-hidden shadow-lg"
            firstContent={
              <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Fast Mode</h3>
                  <p className="text-emerald-100">Quick pixels</p>
                </div>
              </div>
            }
            secondContent={
              <div className="w-full h-full bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">Speedy! ⚡</h3>
                  <p className="text-rose-100">Lightning fast</p>
                </div>
              </div>
            }
            gridSize={12}
            pixelColor="#dc2626"
            animationStepDuration={0.2}
          />

        </div>

        {/* Instructions */}
        <div className="mt-12 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">
            How to Use PixelTransition
          </h2>
          <div className="text-left bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import PixelTransition from '@/components/PixelTransition';

<PixelTransition
  firstContent={<div>Initial content</div>}
  secondContent={<div>Transition content</div>}
  gridSize={8}              // Number of pixels
  pixelColor="#000"         // Pixel color
  animationStepDuration={0.4} // Animation speed
  once={false}              // Revert on mouse leave
  className="custom-class"
/>`}
            </pre>
          </div>
        </div>

      </main>
    </div>
  );
}
