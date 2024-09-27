function Home() {
  return (
    <div>
      <nav className="bg-yellow-200 p-6 text-xl font-semibold">
        <span>Gestion-des-salles Campus HEP</span>
      </nav>
      <div className="flex-col space-y-3 mt-20  ">
        <h1 className="text-2xl font-semibold text-center">
          Bienvenue sur le gestionnaire de salle du campus HEP
        </h1>
        <div className="text-center">
          <h2 className="text-xl font-bold">Que souhaitez-vous?</h2>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10 pr-44 pl-44 pt-20 pb-28">
        <div className=" p-6 shadow-lg shadow-yellow-200 rounded-lg border-t-2 border-t-stone-300 ">
          <a href="reservation">
            <img src="../../utilisateur.png" className="h-28 w-28 " />
            <span>Voir les salles</span>
          </a>
        </div>
        <div className=" p-6 shadow-lg shadow-yellow-200 rounded-lg border-t-2 border-t-stone-300">
          <a href="admin">
            <img src="../../personne-non-autorisee.png" className="h-28 w-28" />
            <span>Administrateur</span>
          </a>
        </div>
      </div>
      <footer className="bg-purple-500 p-14">
        <p className="text-xl font-semibold">
          EPSI, une école du réseau Compétences et Développement 14 grandes
          écoles et centres de formation | 16 000 apprenants | 32 campus en
          France | 18 bureaux à l international 3A EPSI ESAIL ICL IDRAC Business
          School IEFT IET IFAG IGEFI IHEDREA ILERI SUP DE COM VIVA MUNDI WIS
        </p>
        <span>@ Copyright 2021</span>
      </footer>
    </div>
  );
}
export default Home;
