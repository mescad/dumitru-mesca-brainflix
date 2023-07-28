import "./commentcard.scss";

function CommentCard({ id, timestamp, text, likes, name }) {
  let dateArray = new Date(timestamp);
  let date = dateArray.toLocaleDateString();
  return (
    <article id={id} className="card">
      <div className="card__half card__half-left">
        <div className="card__icon"></div>
      </div>

      <div className="card_half card__half-right">
        <div className="card__top">
          <h3 className="card__name">{name}</h3>
          <p className="card__date">{date} </p>
          <p className="card__likes">{likes}</p>
        </div>

        <p className="card__text">{text}</p>
      </div>
    </article>
  );
}

export default CommentCard;
