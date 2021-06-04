import './Dash.css'
import image from './photo1.JPG'

const Dash = () => {
    return(
        <div className='Main'>
            <div className='photo'>
                <img src={image} alt='tk' className='tk'/>
                {/* <div className="text">Trevor Ruta & Kaley Forster</div>
                <div className='text1'>We can't wait to share our special day with you.</div> */}
            </div>
        </div>
    )
}

export default Dash