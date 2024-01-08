import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Registration.css';

function Registration() {
    // const [name, setName] = useState("");
    const [user, setUser] = useState("");
    // const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        setTimeout(function () {
            setMsg("");
        }, 15000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
            // case "name":
            //     setError("");
            //     setName(e.target.value);
            //     if (e.target.value === "") {
            //         setError("Name can't be blank!");
            //     }
            //     break;
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username can't be blank!");
                }
                break;
            // case "mobile":
            //     setError("");
            //     setMobile(e.target.value);
            //     if (e.target.value === "") {
            //         setError("Mobile number can't be blank!");
            //     }
            //     break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if (e.target.value === "") {
                    setError("Password has left blank!");
                }
                break;
            case "pass2":
                setError("");
                setPass2(e.target.value);
                if (e.target.value === "") {
                    setError("Confirm password has left blank!");
                }
                else if (e.target.value !== pass1) {
                    setError("Confirm password does not match!")
                }
                break;
            default:
        }
    }

    function handleSubmit() {
        if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
            var url = "http://localhost/devtest/reactjs/registration.php";
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            var Data = {
                // name: name,
                user: user,
                // mobile: mobile,
                email: email,
                pass: pass2
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    setMsg(response[0].result);
                }).catch((err) => {
                    setError(err);
                    console.log(err);
                });
            // setName("");
            setUser("");
            // setMobile("");
            setEmail("");
            setPass1("");
            setPass2("");
        }
        else {
            setError("All fields are required!");
        }
    }

    function checkUser() {
        var url = "http://localhost/devtest/reactjs/checkuser.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            user: user
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
            .then((response) => {
                setError(response[0].result);
            }).catch((err) => {
                setError(err);
                console.log(err);
            });
    }

    function checkEmail() {
        var url = "http://localhost/devtest/reactjs/checkemail.php";
        var headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        var Data = {
            email: email
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
            .then((response) => {
                setError(response[0].result);
            }).catch((err) => {
                setError(err);
                console.log(err);
            });
    }

    function checkPassword() {
        if (pass1.length < 8) {
            setError("Password is less than 8 characters!")
        }
    }
    // function Mobile() {
    //     if (mobile.length < 10) {
    //         setError("Please Enter 10 digits mobile No.")
    //     }
    //     else if (mobile.length > 10) {
    //         setError("Please Enter 10 digits mobile No.")
    //     }
    // }

    return (
        <>
            <section className="h-auto p-5" style={{ backgroundColor: '#9A616D' }}>
                <div className="container py-0 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10 w-100">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg- text-black">
                                            <h2 className="text-uppercase text-center mb-3">Create an account</h2>
                                            <p>
                                                {
                                                    msg !== "" ?
                                                        <span className="success">{msg}</span> :
                                                        <span className="error">{error}</span>
                                                }
                                            </p>
                                            {/* <div class="form-floating mb-4">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                    value={name}
                                                    onChange={(e) => handleInputChange(e, "name")}
                                                />
                                                <label for="floatingPassword">Enter your Name</label>
                                            </div> */}
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="text"
                                                    name="user"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="Username"
                                                    autoComplete="off"
                                                    value={user}
                                                    onChange={(e) => handleInputChange(e, "user")}
                                                    onBlur={checkUser}
                                                />
                                                <label for="floatingPassword">Enter your Username</label>
                                            </div>
                                            {/* <div class="form-floating mb-4">
                                                <input
                                                    type="number"
                                                    name="mobile"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="Mobile"
                                                    autoComplete="off"
                                                    value={mobile}
                                                    onChange={(e) => handleInputChange(e, "mobile")}
                                                    onBlur={Mobile}
                                                />
                                                <label for="floatingPassword">Enter your Mobile</label>
                                            </div> */}
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="email"
                                                    autoComplete="off"
                                                    value={email}
                                                    onChange={(e) => handleInputChange(e, "email")}
                                                    onBlur={checkEmail}
                                                />
                                                <label for="floatingPassword">Enter your Email id</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="password"
                                                    name="pass1"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="password"
                                                    autoComplete="off"
                                                    value={pass1}
                                                    onChange={(e) => handleInputChange(e, "pass1")}
                                                    onBlur={checkPassword}
                                                />
                                                <label for="floatingPassword">Enter your Password</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="password"
                                                    name="pass2"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    placeholder="password"
                                                    autoComplete="off"
                                                    value={pass2}
                                                    onChange={(e) => handleInputChange(e, "pass2")}
                                                />
                                                <label for="floatingPassword">Enter your Confirm Password</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <input
                                                    type="submit"
                                                    defaultValue="Submit"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                    onClick={handleSubmit}
                                                />
                                            </div>
                                            <p className="text-center text-muted mt-2 mb-0">Have already an account? <Link to="/login">Login here</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;