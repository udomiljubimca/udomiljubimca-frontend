import './App.css';
import { useState } from 'react'

import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  const [podaciLjubimci, setState] = useState([
    {
      id: 1,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 1
    },
    {
      id: 2,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 12
    },
    {
      id: 3,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 12
    },
    {
      id: 4,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 5
    },
    {
      id: 5,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 2
    },
    {
      id: 6,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 7
    },
    {
      id: 7,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 22
    },
    {
      id: 8,
      naziv: 'naziv',
      pol: 'Muski',
      starost: 'junuor',
      mesto: "Beograd",
      isLike: false,
      countLike: 9
    }
  ])

  // funkcija koja uzima id od kliknutig carda
  const isLike = (id) => {
    console.log('is like' + id)
    // state se setuje u novi niz, tako sto ako je id jedna id iz stata, onda se pravi novi objekat sa starim podacima ali sa izmeno na isLike 
    // naci ce jedan id na cards a sve ostalo korz petlju stavice stare podatke
    setState(podaciLjubimci.map(podaci =>
      podaci.id === id ? { ...podaci, isLike: !podaci.isLike } : podaci

    ))
  }

  // sortiraj po nepopularnosti 
  const nepopularni = () => {
    // kopiram podatke posto useState ne moze da radi sa referencom od istog niza(menjanje istog niza tj referenciranje ka istom nizu)
    const kopijaPodataka = [...podaciLjubimci]

    setState(
      kopijaPodataka.sort((a, b) => a.countLike - b.countLike)
    )

    console.log('sort', kopijaPodataka)
  }

  // sortiraj po popularnosti
  const popularni = () => {
    // kopiram podatke posto useState ne moze da radi sa referencom od istog niza(menjanje istog niza tj referenciranje ka istom nizu)
    const kopijaPodataka = [...podaciLjubimci]

    setState(
      kopijaPodataka.sort((a, b) => b.countLike - a.countLike)
    )

    console.log('sort', kopijaPodataka)

  }
  console.log('novi podaci', podaciLjubimci)




  // objasnjenje za strukturu home page
  // Header
  // Main
  // footer
  return (
    <div className='App'>
      <Header />
      <Main
        podaci={podaciLjubimci}
        like={isLike}
        prikaziNepopularne={nepopularni}
        prikaziPopularne={popularni}

      />
      <Footer />


    </div>
  );
}

export default App;
// <Main podaci={podaciLjubimci} like={isLike} />
// <Footer />
