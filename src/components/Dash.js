import './Dash.css'
import image from './photo1.JPG'
import image2 from './Trevor and Kaley.png'

const Dash = () => {
    return(
        <div className='Main'>
            <div className='photo'>
                <img src={image} alt='tk' className='tk'/>
                {/* <div className='text'>Trevor Ruta & Kaley Forster</div> */}
                <div className='text1'>We can't wait to share our special day with you.</div>
            </div>
            {/* <div className='info'>
                <div className='header'>The Wedding Party</div>
                <div className='bride'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/89654410_2723347271078074_3336542105492258816_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=x__3-1QADEoAX8c6ouL&_nc_ht=scontent-iad3-2.xx&oh=a6af69f120940347a76dbecf241b8d22&oe=60E46803' height='300'/>
                    <h4>The Bride</h4>
                    <h6>Kaley Forster</h6>
                </div>
                <div className='groom'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/124879155_3382681775144617_1829141715145502033_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=MVcSROsYmSAAX_X5h_H&tn=GeQdwZjtTRlvCh8a&_nc_ht=scontent-iad3-2.xx&oh=64d45aaabdbe2b04b472e8f3aa957281&oe=60E45016' height='300'/>
                    <h4>The Groom</h4>
                    <h6>Trevor Ruta</h6>
                </div>
                <div className='moh'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/116608321_3160964740647762_2462512815032148703_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=YkXMCFAQubUAX-amzcB&_nc_ht=scontent-iad3-2.xx&oh=06d01dd4cc416761e3a82675cb986230&oe=60E33F45' height='300'/>
                    <h4>The Maid of Honor</h4>
                    <h6>Dakota Peracki</h6>
                </div>
                <div className='best-man'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/71014832_3074187935969848_2019046439174275072_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=KNxH9466yicAX8Y5Q82&_nc_ht=scontent-iad3-2.xx&oh=e47adf9c126d395c3c99ff5a6f8e8c46&oe=60E4DDDD' height='300'/>
                    <h4>The Best Man</h4>
                    <h6>Jeff Anderson</h6>
                </div>
                <div className='bm'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/170380608_1986283238204205_4911536586030280914_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=b52TmklKmWMAX86b5ny&tn=GeQdwZjtTRlvCh8a&_nc_ht=scontent-iad3-2.xx&oh=00caabab792ac9be60a287c85c3e4d6c&oe=60E3FF92'height='300'/>
                    <h4>Bridesmaid</h4>
                    <h6>Ciara Nichols</h6>
                </div>
                <div className='gm'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/55468413_2071372079583099_3587331430658605056_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=wvdGWD7EL9wAX-IEMnu&_nc_ht=scontent-iad3-2.xx&oh=f148e3bfb3c55c80e74a3948ae79c98e&oe=60E28A2D'height='300'/>
                    <h4>Groomsmen</h4>
                    <h6>Chris Juarez</h6>
                </div>
                <div className='bm2'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/185296289_5443005895772823_8480272119173310692_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bB6PwMuWBcsAX_Yt9ll&_nc_ht=scontent-iad3-2.xx&oh=afcc8e056f59dc067f4c521b3384f88d&oe=60E2AAB0'height='300'/>
                    <h4>Bridesmaid</h4>
                    <h6>Alexis Seretti</h6>
                </div>
                <div className='gm2'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/83134260_3992772360796191_2633580859840022966_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-zpH2NhkJpEAX9lG592&_nc_ht=scontent-iad3-2.xx&oh=cd4695f575c9e13ad244b24a1878866e&oe=60E4807F'height='300'/>
                    <h4>Groomsmen</h4>
                    <h6>Sean Seretti</h6>
                </div>
                <div className='bm3'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/107646909_10220635562417995_4413117319059159161_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=QDTHL14OH0gAX9y3XqN&_nc_ht=scontent-iad3-2.xx&oh=f441c45905879f1303e54cfc2327b49c&oe=60E22EFD' height='300'/>
                    <h4>Bridesmaid</h4>
                    <h6>Bre Ruta</h6>
                </div>
                <div className='gm3'>
                    <img src='https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/186520715_10218282642169909_730992034126749818_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=340051&_nc_ohc=NExcbeAnW4wAX-VpJTA&_nc_ht=scontent-iad3-2.xx&oh=41e4d767657659f611be03e422c37e82&oe=60E4E541' height='300'/>
                    <h4>Groomsmen</h4>
                    <h6>Joey Forster</h6>
                </div>
            </div> */}
            <div className='info'>
                <img src className='kt' src={image2}/>
            </div>
        </div>
    )
}

export default Dash