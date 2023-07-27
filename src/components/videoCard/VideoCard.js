import './VideoCard.scss'

function VideoCard({click,id,image,title,channel}){

    return(
        <section id={id} className='videocard' onClick={click}> 

            <img alt='video_thumb' className="videocard__thumbnail" src={image}/>
            <div className='videocard__info'>
            <h3 className="videocard__title">{title}</h3>
            <h4 className="videocard__channel">{channel}</h4>
            </div>
        
       </section>
    )
}

export default VideoCard