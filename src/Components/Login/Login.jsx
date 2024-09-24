import "./Login.css";
import user from './user.png'
import padlock from './padlock.png'
import programming from './programming.png'
import {Link} from "react-router-dom"


function Login() {

    function toggle_password() {
        var x = document.getElementById("input_password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

    }

  
        const handleClick = async (event) => {
          event.preventDefault(); // This prevents the page from reloading
          let email_=document.getElementById("input_email").value;
          let password_=document.getElementById("input_password").value;

          let res=await fetch("https://hellostay.com/api/auth/login",
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
                    email: email_ ,// Send email from the form
                  password: password_, 
                  device_name:1// Send password from the form
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

                <div className="child_011">

                    <div className="div1">
                    <br/>
                        <img id="img_div1"src={programming} height="100px"/>
                        <br/>
                        <br/>
                        <h2>Your Logo</h2>
                        <p> `Think Different`</p>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Hey! Welcome</h2>
                        <p>join us and give information to people</p>

                    </div>

                </div>

                <div className="child_02">
                <Link id="a" to="/Sign_up">create new account</Link>
                    
                    <h2>Log in</h2>
                    <br/>

                    <form>

                        <div className="Username">

                            <img src="https://cdn-icons-png.flaticon.com/128/646/646135.png" height="20vmax" />

                            <input type="email" id="input_email"className="user_name_input" name="user_name" placeholder="Email" />

                        </div>


                        <div className="Username">

                            <img src={padlock} height="20vmax" />

                            <input type="password" id="input_password" className="user_name_input" name="user_name" placeholder="Password" />

                        </div>
                        <h4 id="forget_password">forget password ?</h4>

                        <div className="show_password">

                        <input type="checkbox" id="show_password" onClick={toggle_password} /> <label htmlFor="show_password">show my password</label>
                        
                        </div>

                        <button className="Login_button" onClick={handleClick}>Log in </button>
                           
                           

                    </form>

                    <div id="or_with">
                            <hr/>or with<hr/>
                           </div>

                           <div className="thirdparty_login">

                            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504739.png" height="30vmax"/>
                            <img src="https://cdn-icons-png.flaticon.com/128/2504/2504923.png" height="30vmax"/>
                            <img src="https://cdn-icons-png.flaticon.com/128/15466/15466168.png" height="30vmax"/>
                           </div>

                </div>

            </div>




        </>
    )
}

export default Login;