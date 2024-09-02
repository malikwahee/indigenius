import React from 'react'

const Cardpage = () => {
  return (
    <div className='cardpagem'>
    <div className='cardtoptext'>
    <h1>Indigenius Pro Pricing</h1>
    <p>Subscriber Pricing Plans for Indigenius Meeting AI</p>
    </div>

    <div className='container'>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12 "  >
      <div class="card">
   <div class="card-header">
  <h1>Starter</h1>
  <p>Essential AI translation basics, at no cost</p>
  </div>
  <div class="card-body">
  <h1>$0</h1>
  <h3>Features</h3>
  <p>-Up to 10 minutes per session</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <button className='btn btn-danger'>Get Plan</button>
  </div>

  
       </div>
      </div>

      <div className="col-lg-3 col-md-6 col-12" >
      <div class="card ">
   <div class="card-header">
  <h1>Flex</h1>
  <p>Pay as you go AI conference translation</p>
  </div>
  <div class="card-body">
  <h1>$12.99/hr</h1>
  <h3>Features</h3>
  <p>-Unlimited during the purchased hour</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <button className='btn btn-danger'>Get Plan</button>
  </div>

  
</div>

      </div>

      <div className="col-lg-3 col-md-6 col-12" >
      <div class="card ">
  <div class="card-header">
  <h1>Cool</h1>
  <p>Unlimited AI translation access for a day</p>
  </div>
  <div class="card-body">
  <h1>$89.49/day</h1>
  <h3>Features</h3>
  <p>--Unlimited during the purchased day</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <button className='btn btn-danger'>Get Plan</button>
  </div>

  
</div>

      </div>


      <div className="col-lg-3 col-md-6 col-12" >
      <div class="card ">
  <div class="card-header">
  <h1>Ultimate</h1>
  <p>Full AI translation, every time you meet</p>
  </div>
  <div class="card-body">
  <h1>$0</h1>
  <h3>Features</h3>
  <p>-Up to 10 minutes per session</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <p>-Live translation in 1 of available 15 languages</p>
  <button className='btn btn-danger'>Get Plan</button>
  </div>

  
</div>

      </div>
      

    </div>
    </div>
    </div>
  )
}

export default Cardpage