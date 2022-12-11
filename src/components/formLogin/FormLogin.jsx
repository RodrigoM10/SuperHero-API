import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './formLogin.css'
import { saveToLocalStorage } from '../../utils/localStorage';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const validationSchema = yup.object({
    email: yup
        .string('Ingrese su email')
        .email('Ingrese un email valido')
        .required('Email requerido'),
    password: yup
        .string('Ingrese su contraseña')
        .min(5, 'La contraseña debe tener como minimo 5 caracteres')
        .required('Contraseña requerida'),
});

export default function FormLogin({ requestToken }) {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");


    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            const submitFunction = async (e) => {
                try {
                    const response = await axios.post('http://localhost:4000/api/auth/login', values);
                    const { token } = response.data;
                    saveToLocalStorage({ key: 'token', value: { token } });
                    swal({
                        title: "Excelente!",
                        text: "Ingreso exitoso!",
                        icon: "success",
                        button: "Continuar"
                    });
                    requestToken();
                    if (splitLocation[1] === 'login') {
                        navigate('/searchPage');
                    }
                } catch (error) {
                    console.error(error);
                    if (error.response.data) {

                        swal({
                            title: "Datos Incorrectos",
                            icon: "error",

                            dangerMode: true,
                        })
                    } else {
                        alert('Error de conexion')
                    }
                }
            }
            submitFunction();
        },
    });
    return (
        <div className=" rounded bg-white my-5">
            <form
                className=" form-login p-3"
                onSubmit={formik.handleSubmit}>
                <TextField
                    className="input-login"
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    maxLength="35"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    className="input-login"
                    fullWidth
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    maxLength="15"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <div className="d-flex justify-content-center align-content-center">
                    <Button className={`form-button ${splitLocation[1] === '' ? 'button-sumbit-home' : 'button-sumbit-search'}`} type="submit">
                        Iniciar Sesión
                    </Button>
                    <a href='http://localhost:4000/auth/google'>Login google</a>
                </div>
            </form>
        </div>
    )
}
