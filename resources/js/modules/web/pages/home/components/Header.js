import React from "react"

export default function Header() {
  return <header className="bg-primary text-white">
    <div className="container text-center">
      <img width="125" height="125" src="https://media-exp1.licdn.com/dms/image/C4E03AQHTAalgVTxUdw/profile-displayphoto-shrink_400_400/0/1610905424722?e=1658966400&v=beta&t=OllGxba2xIRtZtB9DfcaYwP_00c1_iD9Lu7CGMPluU0" alt="..." className="rounded-circle" />
      <h1>Defangga Aby Vonega</h1>
      <p className="lead">Teknik Informatika</p>
      <p className="lead"><i className="fa fa-heart text-danger" />{`{ PHP, JavaScript, Python, MySQL, MongoDB }`}</p>
    </div>
  </header>
}

Header.displayName = 'HomePageHeader'
