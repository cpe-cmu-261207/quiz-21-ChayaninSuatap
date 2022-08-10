import { useState } from "react";
import axios from "axios";
import { ChevronDown } from "tabler-icons-react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [genAmount, setGenAmount] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (genAmount < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${genAmount}`
    );
    resp.data.results;
    setUsers(
      resp.data.results.map((x) => {
        return {
          name: x.name.first + " " + x.name.last,
          email: x.email,
          imgUrl: x.picture.large,
          address: `${x.location.city} ${x.location.state} ${x.location.country} ${x.location.postcode}`,
        };
      })
    );
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(e) => setGenAmount(e.target.value)}
          value={genAmount}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard key={x.name} {...x} />
      ))}

      <p className="text-center mt-3 text-muted fst-italic">
        made by Chayanin Suatap 12345679
      </p>
    </div>
  );
}
