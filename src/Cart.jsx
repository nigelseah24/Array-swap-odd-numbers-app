export default function Cart(props) {
    return (
        <div className="cart">
            <h1>Cart {props.number}</h1>
            {props.items.map((item, index) => {
                return <p key={index}  style={{textTransform: 'capitalize'}}>{index+1}. {item.toLowerCase()}</p>
            })
            }   
        </div>
    )
}