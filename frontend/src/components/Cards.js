import Card from './Card'
import Sort from './Sort'

const Cards = ({ ljubimci, isLike, nepopularni, popularni }) => {
  console.log(isLike)
  return (
    <div>
      <Sort
        sortirajNepopularne={nepopularni}
        sortirajPopularne={popularni}
      />

      <Card
        ljubimac={ljubimci}
        like={isLike}
      />

    </div>
  )
}

export default Cards
// <Card ljubimac={ljubimci} like={isLike} />
