
'use client';

export default function HomeEmployee() {
  return (
    <div className="w-[375px] h-[667px] bg-white rounded-[2rem] shadow-lg border mx-auto my-10 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">Olá, Matheus</div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
        <p className="text-gray-600 mb-4">Veja as vagas disponíveis para você:</p>
        
        <div className="mb-4">
          <img src="barista.png" alt="Barista" className="rounded-2xl" />
          <div className="mt-2">
            <p className="font-semibold">Barista</p>
            <p className="text-sm text-gray-500">Espinheiro, Recife</p>
            <button className="text-purple-600 text-sm mt-1">Candidatar-se</button>
          </div>
        </div>

        <div className="mb-4">
          <img src="atendente.png" alt="Atendente" className="rounded-2xl" />
          <div className="mt-2">
            <p className="font-semibold">Atendente</p>
            <p className="text-sm text-gray-500">Boa Viagem, Recife</p>
            <button className="text-purple-600 text-sm mt-1">Candidatar-se</button>
          </div>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl mt-6">
          Ver Mais Vagas
        </button>
      </div>
    </div>
  );
}
