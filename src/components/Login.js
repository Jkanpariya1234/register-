import React, { useState, useEffect } from "react";
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const naviget = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            naviget("/dashboard");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if (loginStatus) {
            setError(loginStatus);
            setTimeout(function () {
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function () {
            setMsg("");
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username can't be blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("Password can't be blank");
                }
                break;
            default:
        }
    }

    function loginSubmit() {
        if (user !== "" && pass != "") {
            var url = "http://localhost/devtest/reactjs/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    if (response[0].result === "Invalid username!" || response[0].result === "Invalid password!") {
                        setError(response[0].result);
                    }
                    else {
                        setMsg(response[0].result);
                        setTimeout(function () {
                            localStorage.setItem("login", true);
                            localStorage.setItem('user', user);
                            naviget("/dashboard");
                        }, 5000);
                    }
                }).catch((err) => {
                    setError(err);
                    console.log(err);
                })
        }
        else {
            setError("All field are required!")
        }
    }
    function ShowPassword() {
        var x = document.getElementById("ShowPassword");
        if (x.type === "password") 
        {
            x.type = "text";
        } 
        else 
        {
            x.type = "password";
        }
    }
    return (
        <>
            <section className="h-100 p-5" style={{ backgroundColor: '#9A616D' }}>
                <div className="container py-0 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10 w-100">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="login form" className="w-100 h-100" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg- text-black">
                                            <div className="d-flex align-items-center mb-0 pb-1">
                                                <span className="h1 fw-bold mb-0 text-center w-100 mb-3">Sign in</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                                            <p>
                                                {
                                                    error !== "" ?
                                                        <div style={{ color: '#842029' }}><b>{error}</b></div> :
                                                        <div style={{ color: '#badbcc' }}><b>{msg}</b></div>
                                                }
                                            </p>
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="floatingInput"
                                                    autoComplete="off"
                                                    value={user}
                                                    onChange={(e) => handleInputChange(e, "user")}
                                                    placeholder="name@example.com"
                                                />
                                                <label for="floatingInput">Enter your user name</label>
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    id="ShowPassword"
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                    value={pass}
                                                    onChange={(e) => handleInputChange(e, "pass")}
                                                />
                                                <label for="floatingPassword">Enter your Password</label>
                                                <div class="form-check mt-4">
                                                    <input class="form-check-input" onClick={ShowPassword} type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Show Password
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <input
                                                    type="submit"
                                                    defaultValue="Login"
                                                    className="btn btn-dark btn-lg btn-block"
                                                    onClick={loginSubmit}
                                                />
                                            </div>
                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-2 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/registration">Register</Link></p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}