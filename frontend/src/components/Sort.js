import styled from 'styled-components';


const PositionSortUl = styled.ul`
  position: relative;
  left: 1007px;
  margin-bottom: 100px;

`



const UlSortiraj = styled.ul`
  width: 136px;
  height: 124px;
  list-style: none;
  background: #FFFFFF;
  border: 2px solid #169DA8;
  box-sizing: border-box;
  border-radius: 0px 0px 4px 4px;
  margin-top: 3px;

  /* kada se hoveruje dispaj ce se prikazati na block */
  display: none;

`

const SortirajLi = styled.li`

  list-style: none;
  width: 85px;
  height: 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 25px;
  cursor: pointer;

  &:hover ${UlSortiraj}{
    display:block;
   
  }
`
const List = styled.li`
  width: 104px;
  height: 36px;
  color: #111111;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  position: relative;
  top: 5px;
  left: -15px;

`

function Sort({sortirajNepopularne, sortirajPopularne}) {
  return (
    <div>
      <PositionSortUl>
        <SortirajLi>Sortiraj
          
          <UlSortiraj>
            <List >Najnoviji</List>
            <List 
             onClick={sortirajNepopularne}
             >Nepopularni</List>
            <List 
            onClick={sortirajPopularne}
            >Najpopularniji</List>

          </UlSortiraj>

        </SortirajLi>
      </PositionSortUl>
    </div>
  )
}

export default Sort
