'use client';

export default function HomeEmployer() {
  return (
    <div className="w-[375px] h-[667px] bg-white rounded-[2rem] shadow-lg border mx-auto my-10 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold">Ti</div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
        <p className="text-gray-600">Olá, Matheus</p>
        <h2 className="text-xl font-bold text-indigo-900 mb-4">
          Quem você está procurando?
        </h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">Vagas publicadas:</p>
          <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Adicionar</button>
        </div>
        <div className="mb-4">
          <img src="barista.png" className="rounded-2xl" />
          <div className="mt-2">
            <p className="font-semibold">Barista</p>
            <p className="text-sm text-gray-500">Espinheiro, Recife</p>
            <button className="text-purple-600 text-sm mt-1">Exibir Candidatos</button>
          </div>
        </div>
        <div>
          <img src="atendente.png" className="rounded-2xl" />
          <div className="mt-2">
            <p className="font-semibold">Atendente</p>
            <p className="text-sm text-gray-500">Boa Viagem, Recife</p>
            <button className="text-purple-600 text-sm mt-1">Exibir Candidatos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

