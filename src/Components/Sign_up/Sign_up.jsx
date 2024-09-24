import "./Sign_up.css";
import {Link} from "react-router-dom"
function Sign_up() {
       
    
    const handleClick = async (event) => {
        event.preventDefault(); // This prevents the page from reloading
        let first_name_=document.getElementById("first_name_input").value;
        let password_=document.getElementById("input_password").value;
        let last_name_=document.getElementById("last_name_input").value;
        let email_=document.getElementById("input_email").value;
        let phone_=document.getElementById("phone_input").value;
        

        let res=await fetch("https://hellostay.com/api/auth/register",
          {
              method: 'POST', // Use POST for sending data
              headers: {
                'Content-Type': 'application/json', // Set content type to JSON
                'accept': 'application/json', // Expect JSON response
                'accept-encoding': 'gzip, deflate, br, zstd',
                'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
                'sec-ch-ua':
                  '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'user-agent':
                  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
              },
              body: JSON.stringify({
                  email: email_,// Send email from the form
                password: password_, 
                first_name:first_name_,
                last_name:last_name_,
                term:1,
                phone:phone_// Send password from the form
              }),
            }
        )
        if(res.ok){
          const data = await res.json();
          console.log("login successfully",data);
        }
      };
   

    return (
        <>



            <div className="parent_div">

                <div className="child_01">

                    <div className="div1">

                        <img src="https://cdn-icons-png.flaticon.com/128/2007/2007504.png" height="60px" />
                        <h4>Diprella</h4>

                    </div>

                    <div className="div2">
                        <h2>Welcome Back!</h2>
                        <p>To keep connect with us please login with your personal info</p>

                        <button className="button1"><Link  id="button1_link"to="/">SIGN IN</Link></button>
                    </div>

                </div>

                <div className="child_02">

                    <h2 id="heading">CREATE ACCOUNT</h2>

                    <div className="thirdparty_login">

                        <img src="https://cdn-icons-png.flaticon.com/128/2504/2504739.png" height="30vmax" />
                        <img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" height="30vmax" />
                        <img src="https://cdn-icons-png.flaticon.com/128/15466/15466168.png" height="30vmax" />

                    </div>

                    <p>or use your email for registration</p>

                    <div className="Username">

                        <img src="https://cdn-icons-png.flaticon.com/128/8042/8042420.png" height="20vmax" />

                        <input type="text" id="first_name_input" className="user_name_input" name="user_name" placeholder="First Name" />

                    </div>
                    <div className="Username">

                        <img src="https://cdn-icons-png.flaticon.com/128/6089/6089035.png" height="20vmax" />

                        <input type="text" id="last_name_input" className="user_name_input" name="user_name" placeholder="Last Name" />

                    </div>
                    <div className="Username">

                        <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" height="20vmax" />

                        <input type="email" id="input_email" className="user_name_input" name="user_name" placeholder="Email Address" />

                    </div>

                    <div className="Username">

                        <img src="https://cdn-icons-png.flaticon.com/128/45/45259.png" height="20vmax" />

                        <input type="password" id="input_password" className="user_name_input" name="user_name" placeholder="Password" />

                    </div> 

                    <div className="Username">

                        <img src="https://cdn-icons-png.flaticon.com/128/17486/17486479.png" height="20vmax" />

                        <input type="text" id="phone_input" className="user_name_input" name="user_name" placeholder="Phone No." />

                    </div>

                    <button onClick={handleClick} className="button2">SIGN UP</button>

                    




                </div>

            </div>




        </>
    )
}

export default Sign_up;