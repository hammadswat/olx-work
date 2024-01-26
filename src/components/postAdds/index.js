import "./postadd.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAdToDb } from "../config/firebase";

function Postadd() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };





   async function addpost(){
     try {
            // Perform any additional validation if needed
      
            if (!title || !description || !brand || !amount|| !image) {
              alert('Please fill in all the inputs!');
              return;
            }
      
            const ad = {
              title,
              description,
              brand,
              amount,
              image,
            };
      
            await postAdToDb(ad);
        navigate('/Dashboard')
      }catch(e){
        alert(e.message)
      }
    }

    
  return (
    <div id="main">

      <div className="postDiv">
      <div className="headingp">Post your add</div>
<div className="addimg">
{image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                style={{ width: '80px', height: '50px' }}
              />
            )}
            
</div>
      <div className="post-inputDiv">
      <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" />
      <input onChange={(e) => setBrand(e.target.value)} placeholder="Brand" type="text" />
      <input onChange={(e) => setAmount(e.target.value)} placeholder="Amount" type="text" />
      <input onChange={(e) => setDescription(e.target.value)} placeholder="Description" type="text" id="description" />
      <input onChange={handleImageChange} type="file" className="file"/>
     
            


      <button type="submit" id="postadd" onClick={addpost}>Add post</button>
      </div> 
        
    </div>
    </div>
  );
}

export default Postadd;








// import "./postadd.css"
// import { useState } from "react"
// import { postAdToDb } from "../config/firebase"
// import { useNavigate } from "react-router-dom"



// function Postadd(){
// const navigate = useNavigate()
//     const [title ,setTitle] = useState()
//     const [description ,setDescripition] = useState()
//     const [amount ,setAmount] = useState()
//     const [image ,setImage] = useState()

//     const addpost = async () => {
//         try {
//             await postAdToDb({ title, description, amount, image });
//             navigate("./Dashboard");
//         } catch (e) {
//             alert(e.message);
//         }
//     }
    
//     return<div id="main">
//             <h3>Post your add</h3>
//     <input onChange={(e)=>setTitle(e.target.value)} placeholder="Title" type="text" /><br />
//     <input onChange={(e)=>setDescripition(e.target.value)} placeholder="Description" type="text" /><br />
//     <input onChange={(e)=>setAmount(e.target.value)} placeholder="Amount" type="text" /><br />  
//     <input onChange={(e) => setImage(e.target.files[0])} type="file" /><br />

//     <button type="submit"  id="sub-btn" onClick={addpost}>Add post</button>

//     </div>
// }

// export default  Postadd


