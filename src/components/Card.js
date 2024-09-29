


function Card(props) {
    return (
        <>
          <h1>Card</h1>
          <h3>{props.children}</h3>
        </>
    )
}

Card.Title = function () {
  return (<h3>Card title</h3>)
}

export default Card;
