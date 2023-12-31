import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    //  to store value in localstorage

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };

    return (
        <>
            <h2>Register</h2>

            <form onSubmit={handleSubmitRegister}>
                <div className="form-outline mb-4">
                    <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example1cg">
                        Username
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example1cg">
                        First Name
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example1cg">
                        Last Name
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example3cg">
                        E-mail Address
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example4cg">
                        Password
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                            setInput({ ...input, [e.target.name]: e.target.value })
                        }
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                    />
                    <label className="form-lable" htmlFor="form3Example4cg">
                        Confirm Password
                    </label>
                </div>

                <div>
                    <button type="submit">Register</button>
                </div>

                <p>Have already an account?</p>
                <a href="/login">
                    <u>Login here</u>
                </a>
            </form>
        </>
    );
}

export default Register;