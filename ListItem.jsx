/* eslint-disable react/prop-types */
function ListItem({ salles }) {
  const { nom, capacite, retroprojecteur, etage } = salles;
  return (
    <tr className="border-b-2">
      <th scope="row">{nom}</th>
      <td className="text-center p-6">{capacite}</td>
      <td className="text-center">
        {retroprojecteur === "TRUE" ? "Fonctionnel" : "Non-Fonctionnel"}
      </td>
      <td className="text-center">{etage}</td>
      <td className="text-center">
        <button className="rounded-lg p-3 bg-blue-600 font-semibold hover:bg-blue-800">
          Réserver
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
