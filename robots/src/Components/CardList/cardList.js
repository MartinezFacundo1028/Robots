import Card from "../Card/card";
import "./cardList.css"

const CardList = ({robots}) => {
    console.log(robots,"robots")
    return(
        <div className="container-cardlist">
            {
            robots.map((user,index)=>{
                return(
                    <Card
                    key={index}
                    name={robots[index].name}
                    email={robots[index].email}
                    id={robots[index].id}
                    phone={robots[index].phone}
                    />
                )
            })    
            }
        </div>
    )
}
export default CardList;