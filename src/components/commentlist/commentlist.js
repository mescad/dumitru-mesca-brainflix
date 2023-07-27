import CommentCard from "../commentcard/commentcard";
import './commentlist.scss'

function CommentList({ comments }) {
  return (
    <div className="comments">
      {comments.map((singlecomment) => (
        <CommentCard
          key={singlecomment.id}
          id={singlecomment.id}
          name={singlecomment.name}
          text={singlecomment.comment}
          likes={singlecomment.likes}
          timestamp={singlecomment.timestamp}
        />
      ))}
    </div>
  );
}

export default CommentList;
