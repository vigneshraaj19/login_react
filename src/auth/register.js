import React from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import styles from "./style.module.css";
import { useState } from "react";
import { toast } from 'react-toastify';

const Register=() =>{
    const [data, setData] = useState({
		name: "",
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
        axios.post('http://localhost:5000/api/register',data)
        .then(res =>{
            navigate("/login");  
            toast.success("Registered successfully");     
        })
        .catch(err =>{
            console.log(err.response.data.message);
            toast.error(err.response.data.message);
        })
      
    }
    return(
        <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Welcome Back</h1>
                <Link to="/login">
                    <button type="button" className={styles.white_btn}>
                        Sign in
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
						value={data.name}
                        required
                        className={styles.input}
                    />
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
       
    );
}
export default Register;