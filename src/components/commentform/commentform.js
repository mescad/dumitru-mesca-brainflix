import avatar from '../../assets/images/Mohan-muruge.jpg'
import './commentform.scss'
function CommentForm(){

    return(

        <form className="inputcom">
            <img alt='avatar' className="inputcom__avatar" src={avatar}/>
            <label className="inputcom__label">JOIN THE CONVERSATION </label>
            <input className="inputcom__input" type='text' />
            <button className='inputcom__button'>COMMENT</button>


        </form>


    )
}

export default CommentForm