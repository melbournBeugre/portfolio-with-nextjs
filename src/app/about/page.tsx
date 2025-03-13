import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
      <div className="max-w-3xl">
        {/* Image de profil */}
        <div className="relative mx-auto w-40 h-40 sm:w-56 sm:h-56">
          <Image
            src="/user_profil.jpg"
            alt="Photo de profil"
            width={224}
            height={224}
            className="rounded-full shadow-lg object-cover border-4 border-blue-600"
          />
          {/* Effet décoratif */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-500 rounded-full animate-pulse"></div>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl font-extrabold text-blue-700 mt-6">
          Salut, moi c&apos;est Akou Fulgence 👋
        </h1>

        {/* Sous-titre animé */}
        <p className="text-lg text-gray-700 mt-4 italic">
          Transformer des idées en réalité avec du code et de la créativité.
        </p>

        {/* Texte principal */}
        <p className="mt-6 text-gray-600 leading-relaxed">
          Passionné par le développement web et les nouvelles technologies,
          j&apos;aime concevoir des applications performantes et élégantes. Avec
          une expertise en{" "}
          <span className="font-semibold text-blue-600">
            Next.js, TypeScript et Tailwind CSS
          </span>
          , je construis des interfaces fluides et réactives qui offrent une
          expérience utilisateur exceptionnelle.
        </p>

        <p className="mt-4 text-gray-600">
          En dehors du code, je suis curieux de{" "}
          <span className="text-blue-600 font-semibold">design UX/UI</span>, de
          productivité et d&apos;innovations technologiques. Toujours en quête
          d’apprentissage, je partage mes découvertes et projets avec la
          communauté.
        </p>

        {/* Liste des compétences avec icônes */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow">
            ⚛️ React.js
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow">
            🚀 Next.js
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow">
            🎨 Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow">
            📱 Responsive Design
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg shadow">
            🎯 TypeScript
          </span>
        </div>

        {/* Bouton pour voir les projets */}
        <div className="mt-10">
          <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Voir mes projets 🚀
          </a>
        </div>
      </div>
    </section>
  );
}
