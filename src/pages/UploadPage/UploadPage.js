import './UploadPage.scss'
import NavBar from '../../components/navbar/navbar'
import uploadImage from '../../assets/images/Upload-video-preview.jpg'



function UploadPage(){

    return (
        <>
        <section className='upload'> 
        <h3 className='upload__pagetitle'> Upload Video</h3>
        <form className='upload__form'>

            <label className='upload__label'>VIDEO THUMBNAIL</label>
            <img className='upload__thumbnail' src={uploadImage} />
            <label className='upload__label'>TITLE YOUR VIDEO </label>
            <input className="upload__title" placeholder='Add a title to your video' />
            <label className='upload__label'>ADD A VIDEO DESCRIPTION </label>
            <textarea className="upload__textarea" placeholder='Add a description to your video' />
           
            <div className='upload__buttongroup'>
            <button className='upload__buttongroup--publish'>PUBLISH</button>
            <button className='upload__buttongroup--cancel'>CANCEL </button>
            </div>
        



        </form>









        </section>
        
        
        
        
        
        
        
        </>



    )
}

export default UploadPage