import { useState } from 'react'
import slim from './assets/slim.jpg'
import sarra from './assets/sarra.jpg'
import mariem from './assets/mariem.jpg'
import photoDefaut from './assets/photodefaut.jpg'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import StudentCard from './components/StudentCard.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

const formVide = {
  nom: "",
  email: "",
  tel: "",
  filiere: "",
  annee: "",
  GRP: "",
  ville: "",
}

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      nom: "slim chouchen",
      email: "slimchouchen@gmail.com",
      tel: "50246333",
      filiere: "GLSI",
      annee: "2026",
      GRP: "E",
      ville: "sousse",
      photo: slim,
    },
    {
      nom: "sarra trabelsi",
      email: "sarratrabelsi@gmail.com",
      tel: "50246323",
      filiere: "GLSI",
      annee: "2026",
      GRP: "A", // remets ta vraie valeur
      ville: "tunis", // remets ta vraie valeur
      photo: sarra,
    },
    {
      nom: "mariem khalfalah",
      email: "mariemkhalfalah@gmail.com",
      tel: "50246233",
      filiere: "GLSI",
      annee: "2026",
      GRP: "B",
      ville: "tunis",
      photo: mariem,
    },
  ])

  const [rech, setRech] = useState("")
  const [form, setForm] = useState(formVide)
  const [afficherForm, setAfficherForm] = useState(false)

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const filtredEtudiants = etudiants.filter((e) =>
    e.nom.toLowerCase().includes(rech.toLowerCase()) ||
    e.filiere.toLowerCase().includes(rech.toLowerCase())
)

  const ajouterEtudiant = () => {
    if (!form.nom || !form.email) {
      alert("Le nom et l'email sont obligatoires")
      return
    }
    if (etudiants.some((e) => e.email === form.email)) {
      alert("Cet email existe déjà")
      return
    }
    setEtudiants([...etudiants, { ...form, id: Date.now() , photo: photoDefaut }])
    setForm(formVide)
    setAfficherForm(false)
  }

  const supprimerEtudiant = (email) => {
    setEtudiants(etudiants.filter((e) => e.email !== email))
  }

  const modifierEtudiant = (email) => {
    const nouveauNom = prompt("Entrer le nouveau nom :")
    if (!nouveauNom) return
    setEtudiants(
      etudiants.map((e) => (e.email === email ? { ...e, nom: nouveauNom } : e))
    )
  }

  return (
    <div className='container'>
      <Header />
      <Navbar />
      <div>
        <label>Recherche : </label>
        <input
          type="text"
          value={rech}
          onChange={(e) => setRech(e.target.value)}
        />
        <button onClick={() => setAfficherForm(true)}>Ajouter Etudiant</button>
      </div>
       {afficherForm && (
        <div>
      <input name="nom" placeholder="Nom & Prénom" value={form.nom} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="tel" placeholder="Téléphone" value={form.tel} onChange={handleChange} />
      <input name="filiere" placeholder="Filière" value={form.filiere} onChange={handleChange} />
      <input name="annee" placeholder="Année" value={form.annee} onChange={handleChange} />
      <input name="GRP" placeholder="Groupe" value={form.GRP} onChange={handleChange} />
      <input name="ville" placeholder="Ville" value={form.ville} onChange={handleChange} />
      <button onClick={ajouterEtudiant}>Valider</button>
      </div>
      )}
      <div className='liste'>
      {filtredEtudiants.map((e) => (
        <StudentCard
          key={e.email}
          nom={e.nom}
          email={e.email}
          tel={e.tel}
          filiere={e.filiere}
          annee={e.annee}
          GRP={e.GRP}
          ville={e.ville}
          photo={e.photo}
          supprimer={supprimerEtudiant}
          modifier={modifierEtudiant}
        />
      ))} 
      </div>
      <Footer />
    </div>
  )
}

export default App