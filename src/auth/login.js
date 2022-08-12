import React from "react";
import styles from "./styles.module.css";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
const Login=() =>{
	const [data, setData] = useState({
		email: "",
		password: "",
	});
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const  handleSubmit =(e) =>{
        e.preventDefault();
        console.log(data);
		const url1 = "https://loginapp10.herokuapp.com";
		const url=`${url1}/api/login`
        axios.post(url,data)
        .then(res =>{
			console.log(res.data);
			localStorage.setItem("token", res.data);
			window.location = "/getAll";
			toast.success("Login successfully");
            // navigate("/getAll");       
        })
        .catch(err =>{
            toast.error(err.response.data.message);
        })
      
    }
    return(
        <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit} >
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
    );
}
export default Login;