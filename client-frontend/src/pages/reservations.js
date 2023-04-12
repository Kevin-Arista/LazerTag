import React, {useState} from 'react';
import axios from "axios";
import './reservations.css';

function Reservations(props){
    
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        partysize: "",
        countrycode: "",
        phonenumber: ""
     })
     
     const handleSubmit = (e)=>{
         e.preventDefault()
         axios.post('//localhost:4000/appointments/post', formData).then((res) => {
             console.log(res.status, res.data);
         });
         setFormData({
            fname: "",
            lname: "",
            partysize: "",
            countrycode: "",
            phonenumber: ""
         });
         alert("Your reservation has been made!");
     }
 
     return(
         
         <div className="Reservations">
             
             <form onSubmit={handleSubmit}>
                 <h3 >First Name</h3>
                 <input onChange={(e)=> setFormData({...formData, fname: e.target.value})} value={formData.fname} type="text" name="fname" id="fname" />
                 <br/>
                 <h3>Last Name</h3>
                 <input onChange={(e)=> setFormData({...formData, lname: e.target.value})} value={formData.lname} type="text" name="lname" id="lname" />
                 <br/>
                 <h3>Party Size</h3>
                 <input onChange={(e)=> setFormData({...formData, partysize: e.target.value})} value={formData.partysize} type="text" name="partysize" id="partysize" />
                 <br/>
                 <h3>Country Code</h3>
                 <input onChange={(e)=> setFormData({...formData, countrycode: e.target.value})} value={formData.countrycode} type="text" name="countrycode" id="countrycode" />
                 <br/>
                 <h3>Phone Number</h3>
                 <input onChange={(e)=> setFormData({...formData, phonenumber: e.target.value})} value={formData.phonenumber} type="text" name="phonenumber" id="phonenumber" />
                 <br/>
                 <input id="button" type="submit" value="Submit" />
             </form>    
         </div>
     );
}

export default Reservations;