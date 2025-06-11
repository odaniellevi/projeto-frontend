'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-[375px] h-[667px] bg-white rounded-[2rem] shadow-lg border mx-auto my-10 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Trampa<span className="text-purple-600">i</span>
        </h1>
        <p className="text-center text-gray-600 mt-4 mb-8">
          Você está procurando trabalho ou quer contratar?
        </p>
        <button
          onClick={() => router.push('/freelancer')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl mb-4"
        >
          Sou Freelancer
        </button>
        <button
          onClick={() => router.push('/employer')}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl"
        >
          Quero Contratar
        </button>
      </div>
    </div>
  );
}
