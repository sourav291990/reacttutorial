import './Card.css'
const Card = (props) => {
    console.log(props);
    return <div class="card">
        <div class="card-header">
            <h2>{props.item.header}</h2>
        </div>
        <div class="card-content">
            <p>{props.item.body}</p>
        </div>
    </div>
}

export default Card;