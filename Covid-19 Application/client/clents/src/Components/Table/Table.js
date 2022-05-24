import "./Table.css";

const Table = ({ citizens }) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Birth date</th>
          <th>Adress</th>
          <th>City</th>
          <th>Zip code</th>
          <th>Land line</th>
          <th>Cellular Phone</th>
          <th>Was Infected</th>
          <th>Other</th>
        </tr>
      </thead>
      <tbody>
        {citizens.map((citizen, id) => (
          <tr key={id}>
            <td>{citizen.firstName}</td>
            <td>{citizen.lastName}</td>
            <td>{citizen.birthDate}</td>
            <td>{citizen.address}</td>
            <td>{citizen.city}</td>
            <td>{citizen?.zipcode}</td>
            <td>{citizen.landLine}</td>
            <td>{citizen.cellularPhone}</td>
            <td>{citizen.isInfected ? "Yes" : "No"}</td>
            <td>{citizen.other}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
