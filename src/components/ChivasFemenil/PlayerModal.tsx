import type { Player, PlayersByPosition } from "@/types/player";
import { useEffect, useState } from "react";

interface PlayerModalProps {
  playersByPosition: PlayersByPosition[];
}

export default function PlayerModal({ playersByPosition }: PlayerModalProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (player: Player) => {
    setSelectedPlayer(player);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlayer(null);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="px-4 py-12 mx-auto space-y-24 max-w-7xl">
      {playersByPosition.map(({ position, players }) => (
        <section key={position}>
          <h2 className="relative mb-10 text-3xl font-extrabold tracking-tight text-[#a80060]">
            <span className="relative z-10">{position}s</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {players.map((player) => (
              <button
                key={player.name}
                onClick={() => openModal(player)}
                className="relative overflow-hidden text-left transition-shadow duration-300 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-2xl hover:shadow-xl group"
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="object-contain w-full h-64 transition-transform duration-300 bg-white group-hover:scale-105"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#a80060] transition-colors duration-200">
                    {player.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">#{player.number}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      {isOpen && selectedPlayer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg p-6 mx-auto bg-white shadow-2xl rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute text-xl text-gray-500 cursor-pointer top-3 right-3 hover:text-gray-800"
              aria-label="Cerrar"
            >
              ✕
            </button>
            <img
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              className="object-contain w-full h-auto mb-6 bg-white shadow max-h-96 rounded-xl"
            />
            <h3 className="text-3xl font-bold text-center text-[#a80060]">
              {selectedPlayer.name}
            </h3>
            <p className="mt-2 text-lg text-center text-gray-600">
              Número{" "}
              <span className="font-semibold">#{selectedPlayer.number}</span>
            </p>
            <p className="mt-2 text-sm tracking-wide text-center text-gray-500 uppercase">
              Posición: {selectedPlayer.position}
            </p>

            {selectedPlayer.stats && (
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-center text-gray-700">
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.appearances}
                  </p>
                  <p>Apariciones</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.minutesPlayed}
                  </p>
                  <p>Minutos</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.goals}
                  </p>
                  <p>Goles</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.assists}
                  </p>
                  <p>Asistencias</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.yellowCards}
                  </p>
                  <p>Amarillas</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#a80060]">
                    {selectedPlayer.stats.redCards}
                  </p>
                  <p>Rojas</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
