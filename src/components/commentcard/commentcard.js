import './commentcard.scss'


function CommentCard({id,timestamp,text,likes,name}){

  let dateArray= new Date(timestamp)
  let date= dateArray.toLocaleDateString()
    return(
        <article id={id} className="card">
            <div className="card__icon"></div>
            <h3 className="card__name">{name}</h3>
            <p className="card__text">{text}</p>
            <p className='card__date'>{date} </p>
            <p className="card__likes">{likes}</p>
        </article>
    )
}

export default CommentCard