function Card(props){

    return(

        <div className="container">
            <div className="Image">
                <img src={props.image}className="card-img"/>
            </div>
            <h1 className="Title">{props.title}</h1>
            <h3 className="Subtitle">{props.subt}</h3>
            <p className="Desc">{props.desc}</p>
            <p className="Btn-r">
            <button className="Btn"> <strong><span>View Details</span></strong></button></p>
        </div>
        
    )


}

export default Card;