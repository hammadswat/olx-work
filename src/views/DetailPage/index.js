import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleAd } from "../../components/config/firebase"
import { Header, Swati } from "../../components/header"
import AutoSlider from "../../components/slider/slider"
import { onAuthStateChanged } from "firebase/auth"
import { auth} from "../../components/config/firebase"
import "./detail.css"

function Detail() {
  const [adDetails, setAdDetails] = useState([]);
  const [email,setemail] = useState()

  const { id } = useParams();



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const a = user.email
      
        setemail(a)
      } else {
        alert("Sing Out")
      }
    });
},[])

  useEffect(() => {
    SingleAdDetails();
  },[]);  

  const SingleAdDetails = async () => {
    const res = await getSingleAd(id);
    setAdDetails(res);
  };

  if (!adDetails) {
    return <div>loading...</div>
  }

  return (
    <div id="paren">
      <Header />
      <AutoSlider />






      <div className="container-fluid mt-5 ">
        <div className="row d-flex slid" >

          <div className="col-12 col-md-8 mt-4   " >

            <div id="carouselExampleIndicators" class="carousel slide  pic" >
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active ">
                  <img id="simg" src={adDetails.image} class="d-block " alt="slider1" />
                </div>
                <div class="carousel-item">
                  <img id="simg" src={adDetails.image} class="d-block " alt="slider2" />
                </div>
                <div class="carousel-item">
                  <img id="simg" src={adDetails.image} class="d-block " alt="slider3" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>








            <div className="col-12 mt-4 h-6 p-4 d-flex border border-black rounded-top rounded-bottom "  >

              <div className="col-9 col-md-11 " >
                <h1 className="d1">{"RS " + adDetails.amount}</h1>
                <h4 className="d1">{adDetails.title}</h4>
                <h6><img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/128/592/592243.png" alt="location" />Pakistan , Kaarchi</h6>
              </div>

              <div className="col-md-1 " >
                <img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="shear" />
                <img style={{ width: "25px", marginLeft: "15px" }} src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" alt="like" />
              </div>

            </div>


            <div className="col-12 mt-4 h-6 p-3 border border-black rounded-top rounded-bottom rounded-top rounded-bottom" >

              <h3>{"Details"}</h3>

              <div className="d-flex">
                <div className="col-3 mt-2">
                  <h5>
                    {"Price "}</h5><br />

                  <h5>
                    {"Brand "}</h5>
                </div>

                <div className="col-3 mt-2">
                  <p>{adDetails.amount}</p><br />
                  <p>{adDetails.brand}</p>
                </div>

                <div className="col-4 mt-2">
                  <h5>
                    {"Condition "}</h5><br />
                  <h5>
                    {"sex"}</h5>

                </div>

                <div className="col-2 mt-2">
                  <p>
                    {"New"}</p><br />
                  <p>
                    {"M/F"}</p>

                </div>
              </div></div>

            <div className="col-12 mt-4 p-3 border border-black rounded-top rounded-bottom" >
              <h1>{"Description"}</h1>
              <p>{adDetails.description}</p>

            </div>

          </div>


          <div className="col-12 col-md-4 mt-4" >
          <div className=" profi">

            <div className="col-12 pt-3 d-flex "  >
              <img style={{ width: "70px", height: "70px", marginLeft: "15px" }} src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="like" />

              <div className="me-3" >
                <h5>{email}</h5>
                <p>{"member since 2022"}</p>
                <h5>{"See profile >"}</h5>
              </div>

            </div>

            <div className="col-12 mt-2 phone b-rad" >
              <img style={{ width: "60px"}} src="https://cdn-icons-png.flaticon.com/128/6596/6596115.png" alt="phone" /> Show phone num

            </div>

            <div className="col-12 mt-3 chat b-rad border border-black rounded-top rounded-bottom" >
              <img style={{ width: "30px"}} src="https://cdn-icons-png.flaticon.com/128/2076/2076218.png" alt="chat"/> Chat
              
            </div>
</div>
            <div className="col-12 mt-3 p-2 loca b-rad border border-black rounded-top rounded-bottom" >
              <h1>Loction</h1>
              <h6><img style={{ width: "25px" }} src="https://cdn-icons-png.flaticon.com/128/592/592243.png" alt="location" />Pakistan , Kaarchi</h6>
            </div>




          </div>
        </div>
      </div>


      <Swati />
    </div>


  );
}

export default Detail;
