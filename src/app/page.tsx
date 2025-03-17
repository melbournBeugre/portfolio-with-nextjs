import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 px-4 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Bienvenue sur mon Portfolio
      </h1>
      <Image
        src="/user_profil.jpg"
        width={200}
        height={200}
        alt="Mon Profil"
        className="rounded-full mt-4 w-32 h-32 sm:w-48 sm:h-48 object-cover"
      />
      <p className="font-bold mt-4 text-lg sm:text-xl">
        Je m&apos;appelle Akou Fulgence.
      </p>
      <p className="mt-4 text-lg sm:text-xl">
        Je suis un Developpeur Web fullstack.
      </p>
    </main>
  );
}
