import React from 'react'
import Tmain from '../Image/Tmain.jfif'


const Home = () => {
  return (
    <div className='homepage'>

    <div className='row container'>
    
    <div className='col-lg-6 col-md-12 homeleft'>
    
    <h1> Ai Live <span> Language <br /> Translation <br /></span> Services</h1>

    <p>Boostlingo AI Pro converts spoken words to translated captions with AI</p>

    <spanbtn className='singinbtn'>Sing In</spanbtn>
    <spanbtn className='trailbtn'>Unlock Pro features - Free Trial</spanbtn>
     
    </div>
    <div className='col-lg-6 col-md-12 imagecontainer'>
    <img src={Tmain} alt='HOMEPAGEIMAGE' className='imagesethome'/>
    <div className='colerimg'></div>
    </div>

    </div>

    </div>
  )
}

export default Home