"use client";
import Image from "next/image";
import VacancyCard from "./vacancyCard";

export default function VacancyPage() {
  const vacancies = [
    {
      id: 1,
      title: "Pintor",
      location: "Rua da Paz, Recife",
      image: "/pintor.jpg",
    },

    {
      id: 2,
      title: "Eletricista",
      location: "Espinheiro, Recife",
      image: "/eletricista.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-4 pt-6 pb-10 max-w-md mx-auto font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gray-200 flex items-center justify-center text-purple-700 font-bold">
            Ti
          </div>
        </div>
        <Image
          src="/avatar.png" // Substitua com a imagem real do usuário
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>

      {/* Título e subtítulo */}
      <h1 className="text-2xl font-bold text-[#0A1D56] mb-1">Minhas vagas</h1>
      <p className="text-gray-600 text-base mb-4">Vagas aplicadas:</p>

      {/* Lista de Vagas usando VacancyCard */}
      <div className="flex flex-col gap-4">
        {vacancies.map((vaga) => (
          <VacancyCard
            key={vaga.id}
            image={vaga.image}
            title={vaga.title}
            location={vaga.location}
            buttonLabel="Desistir"
            onButtonClick={() => handleDesistir(vaga.id)}
          />
        ))}
      </div>
    </main>
  );
}
