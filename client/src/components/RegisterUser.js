import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { createData } from "../redux/action";

function RegisterUser() {
  const [userdata, setUserdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = userdata;
    console.log(userdata);
    dispatch(createData(newData)).then(() => {
      navigate("/");
      setUserdata({
        fname: "",
        lname: "",
        email: "",
        phone: "",
      });
    });
  };
  return (
    <>
      <Link to={"/getuser"}>View All Data</Link>
      <h1 align="center">Add User</h1>

      <div className="container">
        <form className="form-group">
          <label>Enter First Name:</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            value={userdata.fname}
            onChange={(e) =>
              setUserdata({ ...userdata, fname: e.target.value })
            }
          />

          <label>Enter Last Name</label>
          <input
            type="text"
            name="lname"
            className="form-control"
            value={userdata.lname}
            onChange={(e) =>
              setUserdata({ ...userdata, lname: e.target.value })
            }
          />

          <label>Enter Email-Id</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={userdata.email}
            onChange={(e) =>
              setUserdata({ ...userdata, email: e.target.value })
            }
          />

          <label>Enter contact</label>
          <input
            type="number"
            name="contact"
            className="form-control"
            value={userdata.phone}
            onChange={(e) =>
              setUserdata({ ...userdata, phone: e.target.value })
            }
          />

          <button className="btn btn-success mt-2" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={userdata.fname}
          onChange={(e) => setUserdata({ ...userdata, fname: e.target.value })}
        />
        <br />

        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={userdata.lname}
          onChange={(e) => setUserdata({ ...userdata, lname: e.target.value })}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userdata.email}
          onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
        />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userdata.phone}
          onChange={(e) => setUserdata({ ...userdata, phone: e.target.value })}
        />
        <br />

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

export default RegisterUser;
