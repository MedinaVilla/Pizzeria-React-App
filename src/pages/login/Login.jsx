import React from 'react';
import styles from './Login.module.css';

import fbIcon from './../../assets/images/icon-facebook.svg'
import loginIcon from './../../assets/images/login.svg';
import { useForm } from 'react-hook-form';
import { Link } from 'wouter';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = () => {
        alert("yeaih");

    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h4 className={styles.title}> <img src={loginIcon} alt="icon" /> &nbsp; INICIAR SESIÓN</h4>
                <Link href="#" className={styles.btnLoginFacebook}> <img src={fbIcon} alt="fbIcon" /> &nbsp; CONÉCTATE CON FACEBOOK</Link>
                <p className={styles.subtitle}>O usa tu dirección de correo electrónico</p>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <label htmlFor="username">CORREO ELECTRÓNICO</label>
                    <input {...register("username", { required: true })} id="username" name="username" type="text" placeholder={"Ingresa tu correo electrónico"} />
                    {errors.username?.type === 'required' && <p className={styles.error_message}>Ingresa tu correo electrónico</p>}
                    <label htmlFor="username">CONTRASEÑA</label>
                    <input  {...register("password", { required: true })} id="password" name="password" type="password" placeholder={"Ingresa tu correo electrónico"} />
                    {errors.password?.type === 'required' && <p className={styles.error_message}>Ingresa tu contraseña</p>}
                    <button type="submit" className={styles.btn_primary}>INICIAR SESIÓN</button>
                </form>
                <br />
                <p><Link href="#" className={styles.href}>¿Olvidaste tu contraseña?</Link></p>
                <br />
                <Link href="#" className={styles.btn_secondary}>REGISTRARME</Link>
            </div>
        </div>
    );
}

export default Login;
