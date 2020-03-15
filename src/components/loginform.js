import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {

    const schema = yup.object().shape({
        Username: yup.string().required("Username is required"),
        Password: yup.string().required("Password is required.").length(4, "Password must be minimum 4 characters.")
    });

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="Username" placeholder="Username" ref={register({ required: true })} />
            <input name="Password" placeholder="Password" ref={register({ required: true })} />
            {errors.Username && <p>{errors.Username.message}</p>}
            {errors.Password && <p>{errors.Password.message}</p>}

            <input type="submit" />
        </form>
    )

    
    
}

export default LoginForm;