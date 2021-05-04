import './App.css';
import { useState, useEffect } from 'react'

import Content from './components/Content'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import styled from 'styled-components';

function App() {


  const [popup, setPopup] = useState(false)

  const [podaciLjubimci, setState] = useState([
    {
      id: 1,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 2,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 3,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 4,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 5,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 6,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 7,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    },
    {
      id: 8,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,

    }
  ])

  const [userData, setUserData] = useState([])


  // kada korisnik nije kliknuo na prijavi se onda postoji scroll a kad korisnik klikne na prijavi se scroll nestaje (kao da se zamrzne slika i prikazuje se samo popup za prijavi se)
  // u useEffectu gledamo na promene promenljive popup(sto je state, i ako se promeni state dolazi do rendera-obradivanja komponente) ako je true(korisnik je kliknu na prijavi se - direktno gadjamo DOM-UI)
  // kad korisnik pritisne X na popup menja se popup na false i koritimo clean up u useEffet-u(da ocistimo sa DOM-a tj. UI-a na overflow hidden)
  useEffect(() => {

    if (popup) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'scroll'
    }
  }, [popup])






  // funkcija koja prima argument da li je korisnik kliknuo PRijavi se link(ako jeste primice true ako nije primimce false)
  const triggerPopUp = (isTrigger) => {
    console.log("PRITISNIT JE POPUP", isTrigger)

    setPopup(isTrigger)
  }

  const removePopUp = (isTrigger) => {

    console.log("PRITISNIT JE ZA REMOVE POPUP", isTrigger)

    setPopup(isTrigger)

  }


  const sendPrijaviSe = (pickData) => {

    console.log('KORISNICKI PODACI', pickData)

    setUserData([pickData])



  }

  console.log("USER DATA", userData)


  // funkcija koja uzima id od kliknutig carda
  const isLike = (id) => {
    console.log('is like' + id)
    // state se setuje u novi niz, tako sto ako je id jedna id iz stata, onda se pravi novi objekat sa starim podacima ali sa izmeno na isLike 
    // naci ce jedan id na cards a sve ostalo korz petlju stavice stare podatke
    setState(podaciLjubimci.map(podaci =>
      podaci.id === id ? { ...podaci, isLike: !podaci.isLike } : podaci

    ))
  }

  console.log('novi podaci', podaciLjubimci)


  // document.body.style.overflow = "hidden"

  ////////////////// stil ///////////////


  const AppDiv = styled.div`
  

  background-color:${({ showBackgraund }) => showBackgraund ? '#C4C4C4' : '#E5E5E5;'};
  
`




  // objasnjenje za strukturu home page
  // Header
  // Main
  // footer
  return (
    <AppDiv showBackgraund={popup}>
      <Header
        trigger={triggerPopUp}

      />
      <Content
        podaci={podaciLjubimci}
        like={isLike}

        removeTrigger={removePopUp}

        isTrigger={popup}

        sendData={sendPrijaviSe}

        resizeHeight={popup}
      />
      <Footer />


    </AppDiv>
  );
}

export default App;

