function VideoCard(props){

    return(
        <section id={props.id} className='videocard__section' onClick={props.click}> 

            <img className="videocard__thumbnail" src={props.image}/>
            <div>
            <h3 className="videocard__title">{props.title}</h3>
            <h4 className="videocard__channel">{props.channel}</h4>
            </div>
        
       </section>
    )
}

export default VideoCard