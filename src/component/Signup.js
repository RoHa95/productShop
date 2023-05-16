import React, {useState , useEffect} from 'react';
import {validate} from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast';
import styles from './Signup.module.css';

const Signup = () => {
    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    }) 
    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    useEffect(() =>{
        setErrors(validate(data))
        console.log(errors)
    },[data, touched])

    const changeHandeler = event =>{
        if( event.target.name === "isAccepted"){
            setData({...data, [event.target.name] : event.target.checked})
        }else{
            setData({...data,[event.target.name]: event.target.value})
        }
    }
    const focusHandeler = event => {
        setTouched({...touched, [event.target.name]: true})
    }
    const submitHandeler = event => {
        event.preventDefault();
        if ( !Object.keys(errors).length) {
            notify("You signed up seccessfully!" , "success")
        }
        else{
            notify("Invallid data" , "error")
            setTouched({
                name: true,
                email:true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }
    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandeler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input 
                    className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput}
                    name='name' 
                    type='text' 
                    value= {data.name} 
                    onChange={changeHandeler} 
                    onFocus={focusHandeler}></input>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input
                    className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput} 
                    name='email' 
                    type='email' 
                    value= {data.email} 
                    onChange={changeHandeler} 
                    onFocus={focusHandeler}></input>
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                    className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput}
                    name='password' 
                    type='password' 
                    value= {data.password} 
                    onChange={changeHandeler} 
                    onFocus={focusHandeler}></input>
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input
                    className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput} 
                    name='confirmPassword' 
                    type='password' 
                    value= {data.confirmPassword} 
                    onChange={changeHandeler} 
                    onFocus={focusHandeler}></input>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                    <label>I accept terms of privacy policy</label>
                    <input
                    name='isAccepted' 
                    type='checkbox' 
                    value= {data.isAccepted} 
                    onChange={changeHandeler} 
                    onFocus={focusHandeler}></input>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formBottons}>
                    <a>Login</a>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;