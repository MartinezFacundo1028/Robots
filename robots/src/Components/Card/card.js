import "./card.css"
const Card = ({name, phone,email,id}) => {

    return(
        <div className="card">
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h3 style={{color:"white"}}>{name}</h3>
                <p style={{color:"white"}}>Emai: {email}</p>
                <p style={{color:"white"}}>Telefono: +{phone}</p>
            </div>
        </div>
    )
}

export default Card;