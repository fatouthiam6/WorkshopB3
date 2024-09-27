import { useEffect, useState } from "react";
import { getSalles } from "../services/apiSalles";
import ListItem from "./ListItem";

function Reservation() {
  const [salles, setSalles] = useState([]);
  const [show, setShow] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("capacite");
  const [sortOrder, setSortOrder] = useState("desc");

  function handleShow() {
    setShow(!show);
  }

  useEffect(function () {
    getSalles().then((data) => setSalles(data));
  }, []);
  const sortedSalles = salles.sort((a, b) => {
    const comparison =
      sortOrder === "asc"
        ? a[sortCriteria] - b[sortCriteria]
        : b[sortCriteria] - a[sortCriteria];

    if (sortCriteria === "nom") {
      return sortOrder === "asc"
        ? a.nom.localeCompare(b.nom)
        : b.nom.localeCompare(a.nom);
    }
    return comparison;
  });
  return (
    <div>
      <nav className="bg-yellow-200 p-6 text-xl font-semibold">
        <span>Gestion-des-salles Campus HEP</span>
      </nav>
      <main className="p-16 m-14 bg-stone-200 rounded-lg ">
        <p className="text-2xl font-semibold mb-6">Liste des salles</p>
        <button
          className="mb-6 rounded-lg bg-blue-600 p-2"
          onClick={handleShow}
        >
          Afficher les salles disponibles
        </button>

        <br />
        {show && (
          <>
            <select
              className="p-4 mb-6 w-full rounded-lg bg-stone-100  font-semibold"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
            >
              <option className=" ">
                Dans quelle étage voulez-vous réserver
              </option>
              <option>-1</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>

            <p className="text-xl font-semibold mb-1">
              Tri suivant la capacité des salles:
            </p>
            <button
              className="m-2 bg-stone-100 p-2 active:bg-blue-600 font-semibold"
              onClick={() => setSortOrder("asc")}
            >
              Ascendant
            </button>
            <button
              className=" bg-stone-100 p-2 active:bg-blue-600 font-semibold"
              onClick={() => setSortOrder("desc")}
            >
              Descendant
            </button>

            <table className=" bg-stone-50 w-full mt-6">
              <th scope="col" className="border-b-2 p-6">
                Nom
              </th>
              <th scope="col" className="border-b-2">
                Capacité
              </th>
              <th scope="col" className="border-b-2">
                Rétroprojecteur
              </th>
              <th scope="col" className="border-b-2">
                Étage
              </th>
              <th scope="col" className="border-b-2"></th>
              {sortedSalles.map((salle) => (
                <ListItem salles={salle} key={salle.salle_id} />
              ))}
              /
            </table>
            <p className="mt-6 font-semibold text-xl">
              Pour quel jour voulez-vous réserver?
            </p>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2024-09-28"
              min="2024-10-01"
              max="2025-01-30"
              className="w-full p-3 mt-2"
            />
            <p className="mt-6 font-semibold text-xl">Heure de Début</p>
            <input
              type="time"
              id="start"
              name="trip-start"
              value="2024-09-28"
              min="2024-10-01"
              max="2025-01-30"
              className="w-full p-3 mt-2"
            />
            <p className="mt-6 font-semibold text-xl">Heure de Fin</p>
            <input
              type="time"
              id="start"
              name="trip-start"
              value="2024-09-28"
              min="2024-10-01"
              max="2025-01-30"
              className="w-full p-3 mt-2"
            />
            <a href="admin">
              <button className=" mt-6 rounded-lg p-2 bg-green-500 text-right font-semibold hover:bg-green-800">
                Confirmer
              </button>
            </a>
          </>
        )}
      </main>

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

export default Reservation;
