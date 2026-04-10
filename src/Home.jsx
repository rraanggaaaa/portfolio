import React, { useState, useEffect } from 'react';

const Home = () => {
    const [emojis, setEmojis] = useState([]);

    // Daftar emoji untuk mengejek
    const teasingEmojis = ['🤏', '🦐', '📏', '👇', '😆', '🤣', '📐', '🐜', '🪤', '😂', '🙈', '👶'];

    // Tambahkan emoji baru setiap detik
    useEffect(() => {
        const interval = setInterval(() => {
            const newEmoji = {
                id: Date.now(),
                emoji: teasingEmojis[Math.floor(Math.random() * teasingEmojis.length)],
                left: Math.random() * 100, // posisi horizontal dalam %
                animationDuration: Math.random() * 2 + 1, // 1-3 detik
            };
            setEmojis(prev => [...prev, newEmoji]);

            // Hapus emoji setelah animasi selesai
            setTimeout(() => {
                setEmojis(prev => prev.filter(emoji => emoji.id !== newEmoji.id));
            }, newEmoji.animationDuration * 1000);
        }, 500); // Muncul setiap 0.5 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">

            {/* Teks utama */}
            <div className="text-center z-10">
                <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl animate-bounce">
                    MANDA PENDEK!
                </h1>
            </div>

            {/* Emoji yang bermunculan */}
            {emojis.map((emoji) => (
                <div
                    key={emoji.id}
                    className="fixed text-4xl md:text-6xl pointer-events-none animate-float"
                    style={{
                        left: `${emoji.left}%`,
                        bottom: '-50px',
                        animationDuration: `${emoji.animationDuration}s`,
                    }}
                >
                    {emoji.emoji}
                </div>
            ))}

            {/* Tambahan emoji statis di sekitar */}
            <div className="absolute top-10 left-10 text-3xl animate-bounce delay-0">🤏</div>
            <div className="absolute top-20 right-20 text-3xl animate-bounce delay-300">🦐</div>
            <div className="absolute bottom-20 left-10 text-3xl animate-bounce delay-700">📏</div>
            <div className="absolute bottom-10 right-10 text-3xl animate-bounce delay-500">👇</div>
            <div className="absolute top-1/2 left-5 text-3xl animate-ping">😆</div>
            <div className="absolute top-1/3 right-5 text-3xl animate-pulse">🤣</div>

            <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }

        .delay-0 {
          animation-delay: 0s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
        </div>
    );
};

export default Home;