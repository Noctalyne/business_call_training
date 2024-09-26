
import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
// import Choose from "./story/Choose";

// import { userData } from "../../data/DataUser";
import Formulaire from "../../story/Formulaire";
import {useState , useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Template() {

  const {user, setUser} = useContext(UserContext)
  const [input, setInput] = useState(null);


  const handleOnChange = e => { 
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = f => {
    f.preventDefault();
    // console.log(input);
    setUser(input); 
  }



  // Gestion si les infos sont null/ vide
  const getData = () => {
    // if (userData.nom === null || userData.prenom === null || userData.cursus === null || userData.contrat === null || userData.motif === null) {
      if (user.nom === null || user.prenom === null || user.cursus === null || user.contrat === null || user.motif === null) {
      return (<Formulaire onChange={handleOnChange} onSubmit={handleOnSubmit} />)
    }
    else {
      return (
        <>

          {console.log(user)}

          <Link to="/etape0" className="" >Commencer</Link>
        </>


      )
    }
  }


  return (
    <div>
      <h1> form</h1>
      {getData()}
      {/* {console.log(user)} */}
    </div>

  )


}