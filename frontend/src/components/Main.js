import Cards from './Cards'
import UdomiLjubimce from './UdomiLjubimce'
import Testimanials from './Testimonials'
import KakoUdomitiLjubimca from './KakoUdomitiLjubimca'

const Main = ({ podaci, like, prikaziNepopularne, prikaziPopularne }) => {
  console.log(podaci)
  return (
    <div className='container'>

      <Cards
        ljubimci={podaci}
        isLike={like}
        nepopularni={prikaziNepopularne}
        popularni={prikaziPopularne}
      />
      <Testimanials />
      <KakoUdomitiLjubimca />
      <UdomiLjubimce />
    </div>
  )
}

export default Main
