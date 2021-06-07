import './Dash.css'
import image from './photo1.JPG'
// import image2 from './Trevor and Kaley.png'

const Dash = () => {
    return(
        <div className='Main'>
            <div className='photo'>
                <img src={image} alt='tk' className='tk'/>
                {/* <img src className='kt' src={image2}/> */}
                <div className='text'>Trevor Ruta & Kaley Forster</div>
                <div className='text1'>We can't wait to share our special with you.</div>
            </div>
        </div>
    )
}

export default Dash