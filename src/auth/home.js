import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styles from "./styless.module.css";
import { toast } from 'react-toastify';

const Home=() =>{
    const handleLogout = () => {
		
		localStorage.removeItem("token");
	    window.location.reload();
	};
    const[json,setJson] =useState([]);
    useEffect(() =>{
        const validtoken = localStorage.getItem("token");
        console.log(validtoken);
        const url1 = "https://loginapp10.herokuapp.com";
			const url=`${url1}/api/getAll`
        axios.get(url,{
           headers:{'auth': validtoken}})


        .then(res =>{
            console.log(res.data);
			setJson(res.data);
               
        })
        .catch(err =>{
            
        })

    },[])

    return(
        <div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
            <p>{JSON.stringify(json)}</p>
		</div>
    );
}
export default Home;