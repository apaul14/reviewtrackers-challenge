


const Responsecard = ({responseData}) => {
  const {
    name,
    content,
    published_at
  } = responseData

  return (
    <div className="card-wrap-outer" >
      <div className="card-wrap-inner">
        <div className="card-upper">
        </div>
        <p className="content">{content}</p>
        <br/>
        <div className="card-lower">
          <p>{name}</p>
          <p>{published_at}</p>
        </div>
      </div>
    </div>
  )
}

export default Responsecard