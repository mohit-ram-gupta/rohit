import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Grid, Box } from "@mui/material";
import LOGO from "./Assets/Images/LOGO.svg";
import Google from "./Assets/Images/Google.svg";
import bg from "./Assets/Images/bg.svg";
 import { useNavigate } from 'react-router-dom';


function Login() {
     const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const login = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!form.email.trim()) {
      setError('Email field is required.');
      return;
    }

    if (!form.password.trim()) {
      setError('Password field is required.');
      return;
    }

    if (!isValidEmail(form.email)) {
      setError('Please input a valid email address.');
      return;
    }

    try {
      const response = await axios.post('/api/login', form);
      if (response.data.success) {
        const userData = response.data.user;
        setUser(userData.id);
        localStorage.setItem('userId', userData.id);
        localStorage.setItem('isLoggedIn', 'true');
        console.log(userData);
        navigate('/dashboard');
        setIsLoggedIn(true);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
       <>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box style={{ background: "black" }}>
            <Box ml={5} pt={4}>
              <img src={LOGO} alt="" />
            </Box>
            <Grid container>
              <Grid item lg={5} md={7} sm={9} xs={9} mx="auto">
              
             <form onSubmit={login}
                  style={{
                    color: "white",
                    background: "#444A2B54",
                    padding: "20px 5rem 5rem 5rem",
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <h2>
                      Welcome <span style={{ color: "#D6F551" }}> Back</span>{" "}
                    </h2>
                  </Box>
                  <Box>
                    Lorem ipsum dolor sit amet. Id vero facere et culpa <br />{" "}
                    ea dolores natus
                  </Box>
                  <br/>
                  
                   {error && <div style={{ color: 'red' }}>{error}</div>}


                  <Box mt={3} mb={1}>
                    Email
                  </Box>
                  <Box>
                    <input
                      style={{ background: "#444A2B54", color: "white" }}
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="user@gmail.com"
                      value={form.email}
                     onChange={(e) => setForm({ ...form, email: e.target.value })}
                     />
          {formSubmitted && !form.email.trim() && <div style={{ color: 'red' }}>Email field is required.</div>}
                  </Box>
                  <Box mt={3} mb={1}>
                    Password
                  </Box>
                  <Box>
                    <input
                      style={{ background: "#444A2B54", color: "white" }}
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      value={form.password}
                     onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {formSubmitted && !form.password.trim() && <div style={{ color: 'red' }}>Password field is required.</div>}
                  </Box>
                  <Box
                    mt={2}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      {" "}
                      <input
                        type="checkbox"
                        style={{ background: "#444A2B54" }}
                      />{" "}
                      Remember me{" "}
                    </Box>
                    <Box style={{ color: "#E2FF66" }}>Forget Password ?</Box>
                  </Box>
                  <Box mt={2}>
                    <button
                      type="submit"
                      className="form-control"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        background: "#D6F551",
                        borderStyle: "none",
                      }}
                    >
                      Login
                    </button>
                  </Box>
                  <Box
                    mt={4}
                    className="form-control"
                    style={{
                      fontWeight: "500",
                      background: "#444A2B54",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>
                      <img src={Google} alt="" />
                    </span>{" "}
                    <span> SignUp with Google</span>
                  </Box>
                  <Box mt={2} style={{ textAlign: "center" }}>
                    Not Remember?
                    <span style={{ color: "#E2FF66" }}> Sign up</span>
                  </Box>
                </form>
              </Grid>
              <Box style={{ width: "100%" }} >
                <img style={{ width: "100%" }} src={bg} alt="" />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

 export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';
// import ReactDOM from 'react-dom/client';

// function Login() {
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const isValidEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const login = async (e) => {
//     e.preventDefault();

//     setFormSubmitted(true);

//     if (!form.email.trim()) {
//       setError('Email field is required.');
//       return;
//     }

//     if (!form.password.trim()) {
//       setError('Password field is required.');
//       return;
//     }

//     if (!isValidEmail(form.email)) {
//       setError('Please input a valid email address.');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/login', form);
//       if (response.data.success) {
//         const userData = response.data.user;
//         setUser(userData.id);
//         localStorage.setItem('userId', userData.id);
//         localStorage.setItem('username', userData.first_name);
//         console.log(userData);
//         window.location.href = '/dashboard';
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } catch (error) {
//       setError(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//       <form onSubmit={login}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="text"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           {formSubmitted && !form.email.trim() && <div style={{ color: 'red' }}>Email field is required.</div>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//           />
//           {formSubmitted && !form.password.trim() && <div style={{ color: 'red' }}>Password field is required.</div>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// if (document.getElementById('app')) {
//   const Index = ReactDOM.createRoot(document.getElementById('app'));

//   Index.render(
//     <React.StrictMode>
//       <Login />
//     </React.StrictMode>
//   );
// }
