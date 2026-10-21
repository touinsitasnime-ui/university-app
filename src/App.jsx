import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import photo from './assets/photo.jpg'
import './App.css'
const etudiant={
  nom:"tasnime touinsi",email:"touinsitasnime@gmail.com",tel:"24840132",filière:"GLSI",année:"2eme année",GRP:"C",ville:"mahdia"
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='div1'>
    <h1>Fiche étudiant</h1>
    <img src={photo} alt="photo etudiant" className='photo' />
    <label className='lab99' >Nom & Prénom :</label>
    <label>{etudiant.nom}</label><br />
    <label className='lab99' >Email :</label><label>{etudiant.email}</label><br />
    <label className='lab99' >Téléphone :</label><label>{etudiant.tel}</label><br />
    <label className='lab99' >Filière :</label><label>{etudiant.filière}</label><br />
    <label className='lab99' >Année d'étude :</label><label>{etudiant.année}</label><br />
    <label className='lab99' >Groupe :</label><label>{etudiant.GRP}</label><br />
    <label className='lab99' >Ville :</label><label>{etudiant.ville}</label><br />
    <button>Contacter</button>
  </div>
  )
}

export default App
