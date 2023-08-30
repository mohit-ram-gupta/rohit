import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Grid, Box } from "@mui/material";
import LOGO from "./Assets/Images/LOGO.svg";
import Google from "./Assets/Images/Google.svg";
import bg from "./Assets/Images/bg.svg";


function Dashboard() {
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

 export default Dashboard;

// if (document.getElementById('app')) {
//   const rootContainer = document.getElementById('app');

//   const existingRoot = ReactDOM.findRoot(rootContainer);

//   if (!existingRoot) {
//     // If a root doesn't exist on the container, create one
//     const root = ReactDOM.createRoot(rootContainer);
  
//     root.render(
//       <React.StrictMode>
//         <Dashboard />
//       </React.StrictMode>
//     );
//   } else {
//     // If a root already exists, update it
//     existingRoot.render(
//       <React.StrictMode>
//         <Dashboard />
//       </React.StrictMode>
//     );
//   }
// }


