import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "23udfhudf232",
      name: "Rodolfo",
      age: 33,
      email: "rod@email.com",
    },
    {
      id: "23ufdsdgdgudf232",
      name: "Aline",
      age: 28,
      email: "aline@email.com",
    },
    {
      id: "23ufgfgfgdgudf232",
      name: "Paulo",
      age: 66,
      email: "paulo@email.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="name" type="text" />
        <input nome="age" type="number" />
        <input name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name} </p>
            <p>Idade: {user.age}</p>
            <p>E-mail: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;
