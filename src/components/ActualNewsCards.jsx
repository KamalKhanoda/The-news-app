import './Components.css'

const ActualNewsCards = (props) => {
  return (
    <div>
        <div className="cardContainer">
            <div className="card">
                <img src={props.src} alt="" />
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <a href={props.url} className='read-more'>Read more</a>
            </div>
        </div>
    </div>
  )
}

export default ActualNewsCards
