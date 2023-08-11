import CommentCard from "../commentCard/CommentCard";
import "./CommentList.scss";

function CommentList({ comments }) {
  return (
    <div className="comments">
      {comments.map((singlecomment) => {
        return (
          <CommentCard
            key={singlecomment.id}
            id={singlecomment.id}
            name={singlecomment.name}
            text={singlecomment.comment}
            likes={singlecomment.likes}
            timestamp={singlecomment.timestamp}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
