import toast from "react-hot-toast";

function Admin() {
  return (
    <>
      <nav className="bg-yellow-200 p-6 text-xl font-semibold">
        <span>Gestion-des-salles Campus HEP</span>
      </nav>
      <div className="p-16 m-52 bg-stone-200 rounded-lg   ">
        <div className="bg-stone-100 p-3 w-full flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">
              Une demande pour la salle BJ11 a été faite de 11h à 15h
            </p>
            <p className="font-semibold">Motif:Travail de groupe</p>
          </div>
          <div className=" space-x-4">
            <a href="home">
              <button
                className="bg-green-500 font-semibold rounded-lg text-black hover:bg-green-700 p-2 
              "
                onClick={() => toast.success("Réservation Validée")}
              >
                Valider
              </button>
            </a>
            <a href="home">
              <button
                className="bg-red-500 font-semibold rounded-lg text-black hover:bg-red-700 p-2"
                onClick={() => toast.success("Réservation Refusée")}
              >
                {" "}
                Refuser
              </button>
            </a>
          </div>
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
    </>
  );
}

export default Admin;
