import { useNavigate } from "react-router-dom"
import "./header.css"
import I1  from "../olx img/c1.png"
import I2  from "../olx img/c2.png"
import I3  from "../olx img/c3.png"
import I4  from "../olx img/c4.png"
import I5  from "../olx img/c5.png"
import I6  from "../olx img/c6.png"
import I7  from "../olx img/c7.png"
import I8  from "../olx img/c8.png"
import I9  from "../olx img/c9.png"
import I10  from "../olx img/c10.png"
import I11 from  "../olx img/c11.png"
import I12 from  "../olx img/c12.png"
import I13 from  "../olx img/c13.png"
import I14 from  "../olx img/c14.png"


import { useEffect, useState } from "react"


export function Header() {

  const navigate = useNavigate()






  return <div>
    <div className="container-fluid ">


      <div className="row sec-nabr " style={{ backgroundColor: '#f7f8f8', padding: "10px 25px" }}>
        <div className="col-3 pt-1 col-md-1 "><img style={{ width: "40px", borderRadius: "50%" }} className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="icon" /></div>
        <div className="col-3 col-md-1 pt-1">
          <img src="https://cdn-icons-png.flaticon.com/128/89/89102.png" width={"23px"} alt="" />
          Motors</div>
        <div className="col-3 col-md-9 pt-1">
          <img width={'23px'} className="img-fluid" src="https://cdn-icons-png.flaticon.com/128/4095/4095563.png" alt="" />Property</div>

      </div>




      <div className="row" style={{ backgroundColor: "#f7f8f8" }}>
        <div className="col">
          <nav className="navbar navbar-expand-lg">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 col-12 logo">

                <li className="nav-item col-2 col-md-1 col-lg-1">

                  <img width={"80%"} src="https://th.bing.com/th/id/OIP.RMaDflwWp2DHp5F6kwf1xgHaEY?pid=ImgDet&w=182&h=107&c=7" className="img-fluid" alt="icon" />
                </li>

                <li className="nav-item col-10 col-md-3 col-lg-3 mt-2 me-3">
                  <form action="" >
                    <select className="form-select form-lg " name="" id="loca-form">
                      <option selected value="">chosse a country</option>
                      <option value="1">PAKISTAN</option>
                      <option value="2">AGHANISTAN</option>
                      <option value="3">Turke</option>
                      <option value="4">Saudia aribai</option>
                      <option value="5">Germeny</option>
                      <option value="6">Canada</option>
                    </select>
                  </form>
                </li>

                <li className="nav-item col-10 col-md-5 col-lg-6 me-2">
                  <form action="" className="d-flex">
                    <div className="input-group ser-inpt">
                      <input className="form-control form-control-md ser-form" type="search" placeholder="find car mobile phone and more" aria-label="Search" />
                      <button className="btn btn-outline-secondary" type="submit" id="sear-btn">
                        <img style={{ width: "25px", height: "20px" }} src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="search" /></button>
                    </div>
                  </form>
                </li>

                <li className="nav-item col-2 col-md-1 col-lg-2 text-center mt-2 me-1">
                  <div id="log-post-btns"> <button id="btn" onClick={() => navigate("/login")}><p>login</p></button>
                    <button id="btn" type="menu" onClick={() => navigate("/postadd")}>post ads</button></div>

                </li>



              </ul>
            </div>
          </nav>
        </div>
      </div>



      <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent list-menu">

            <ul className="navbar-nav  mb-lg-0 text-center" >

              <li className="nav-item dropdown hhh">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  <img width="80%" src={I1} alt="mobile" /> <br />
                  all catigares

                  <ul className="dropdown-menu" >

                  
                    <li><a className="dropdown-item">
                      <img width="50%" src={I3} alt="mobile" /> <br />car</a>
                    </li> 

                    <li><a className="dropdown-item">
                      <img width="50%" src={I3} alt="mobile" /> <br />car</a>
                    </li>

                    <li><a className="dropdown-item">
                      <img width="50%" src={I3} alt="mobile" /> <br />car</a>
                    </li>

                    <li><a className="dropdown-item">
                      <img width="50%" src={I3} alt="mobile" /> <br />car</a>
                    </li>

                    <li><a className="dropdown-item">
                      <img width="50%" src={I3} alt="mobile" /> <br />car</a>
                    </li> 
                    
                    </ul>
                </a>
              </li>

              <li><a className="dropdown-item"><img width="80%" src={I3} alt="mobile" /> <br />property</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I2} alt="mobile" /> <br />Vehicles</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I5} alt="mobile" /> <br />electronics</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I6} alt="mobile" /> <br />Bike</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I7} alt="mobile" /> <br />agricultur</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I8} alt="mobile" /> <br />serveses</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I9} alt="mobile" /> <br />jobs</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I10} alt="mobile" /> <br />Animals</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I11} alt="mobile" /> <br />Firniture</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I12} alt="mobile" /> <br />Fashion</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I13} alt="mobile" /> <br />Book ,Sports</a></li>
              <li><a className="dropdown-item"><img width="80%" src={I14} alt="mobile" /> <br />Kids</a></li>

            </ul>
          </div>

        </div>
      </nav>






    </div>
  </div>


}



export function Swati() {
  return (

    <div>
      <div className="row mt-4  fot-er" >
        <div className="col-6 col-lg-2 mt-2 pe-4">
          <h5>POPULAR CATIGORIES</h5>
          <p className="fotter-anc">
            <a href="">cars</a><br />
            <a href="">Flats for Rrent</a><br />
            <a href="">Mobile Phons</a><br />
            <a href="">Jobs</a>
          </p> <br />
        </div>

        <div className="col-6 mt-2 ">
          <h5>TRANDING SEARCH</h5>
          <p className="fotter-anc">
            <a href="">Bikes</a><br />
            <a href="">Watches</a><br />
            <a href="">Book</a><br />
            <a href="">Dogs</a>
          </p> <br />
        </div>


        <div className="col-4 mt-2 me-2">
          <h5>ABOUT US</h5>
          <p className="fotter-anc">
            <a href="">About Dubizzle Group</a><br />
            <a href="">OLX Blog</a><br />
            <a href="">Contact us</a><br />
            <a href="">OLX for businesses</a>
          </p> <br />
        </div>


        <div className="col mt-2">
          <h5>OLX</h5>
          <p className="fotter-anc">
            <a href="">Help</a><br />
            <a href="">Sitemap</a><br />
            <a href="">Term of use</a><br />
            <a href="">Privacy policy </a>
          </p> <br />
        </div>

        <div className="col mt-2 " >
          <h5>FOLLOW US</h5>
          <a href=""><img style={{ width: "12%" }} src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" /></a>
          <a href=""><img style={{ width: "12%", marginLeft: "5px" }} src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="Youtube" /></a>
          <a href=""><img style={{ width: "12%", marginLeft: "5px" }} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /></a>
          <br /><br />
          <a href=""><img style={{ width: "30%" }} src="	https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt=" " /></a>
          <a href=""><img style={{ width: "30%" }} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt=" " /></a>
          <a href=""><img style={{ width: "30%" }} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt=" " /></a>
        </div>

      </div>
    </div>
  )
}


























export function Foter() {

  return (
    <div>
      <div className="row container-fluid mt-4" style={{ backgroundColor: "gray", color: " black" }}>
        <div className="col-6 col-md-4 col-lg-2 mb-2 ">


          <b>TRENDING SEARCHES<br /></b>
          Bikes<br />
          Watches<br />
          Books<br />
          Dogs<br />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-2 mt-2" >
          <b>ABOUT US</b><br />
          About Dubizzle Group<br />
          OLX Blog<br />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>Contact Us</b><br />
          OLX for Businesses<br />
          OLX<br />
          Help<br />
          Sitemap<br />
          Terms of use<br />
          Privacy Policy<br />
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>Contact Us</b><br />
          OLX for Businesses<br />
          OLX<br />
          Help<br />
          Sitemap<br />
          Terms of use<br />
          Privacy Policy<br />

        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-2 mt-2">
          <b>FOLLOW US</b>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /><br /><br />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /><br />
        </div>   hammadSwati777@gmail.com
      </div></div>
  )
}