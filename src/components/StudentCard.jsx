import './StudentCard.css'

function StudentCard(props) {
  return (
    <div className='div1'>
      <h1>Fiche étudiant</h1>
      <img src={props.photo} alt="photo etudiant" className='photo' />
      <label className='lab99'>Nom & Prénom :</label><label>{props.nom}</label><br />
      <label className='lab99'>Email :</label><label>{props.email}</label><br />
      <label className='lab99'>Téléphone :</label><label>{props.tel}</label><br />
      <label className='lab99'>Filière :</label><label>{props.filiere}</label><br />
      <label className='lab99'>Année d'étude :</label><label>{props.annee}</label><br />
      <label className='lab99'>Groupe :</label><label>{props.GRP}</label><br />
      <label className='lab99'>Ville :</label><label>{props.ville}</label><br />
      <button onClick={() => props.modifier(props.email)}>Modifier</button>
      <button onClick={() => props.supprimer(props.email)}>Supprimer</button>
      <button>Contacter</button>
    </div>
  )
}

export default StudentCard