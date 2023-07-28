import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./commentform.scss";
function CommentForm() {
  return (
    <div className="inputcom__wrapper"> 
    <form className="inputcom">
      <div className="inputcom__half inputcom__half-left">
        <img alt="avatar" className="inputcom__avatar" src={avatar} />
      </div>

      <div className="inputcom__half inputcom__half-right">
        <label className="inputcom__label">JOIN THE CONVERSATION </label>
        <textarea className="inputcom__input" type="text" placeholder="Add a new comment" />
        <button className="inputcom__button">COMMENT</button>
      </div>
    </form>
    </div>
  );
}

export default CommentForm;
