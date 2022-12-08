import Form from 'react-bootstrap/Form';
import './SignInForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';


function SignInForm() {
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');

    const { register, handleSubmit, formState: {
        errors } } = useForm()

    const onSubmit = event => {
        console.log(event);
    }

    // const handlerCreateUser = (e) => {
    //     e.preventDefault();
    //     const user = { userName, password }
    //     console.log(user);
    //     //todo Falta validar 
    //     fetch('http://localhost:8080/home', {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(user)

    //     }).then(() => {
    //         console.log("Correct user");
    //     });
    // }

    return (
        <div className='form-container'>
            <h3>Wellcome!</h3>
            <form id="form-login" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter user" name="userName"
                    // value={userName}
                    {...register("userName",{
                        required: {
                            value: true,
                            message: "*This field is mandatory"
                        },
                        pattern: {
                            value: /^[a-zA-Z]+$/,
                            message: "Incorrect format"
                        }
                    })}
                    // onChange={(e) => setUserName(e.target.value)}
                />
                <div className="error-text-validation">
                    {console.log(errors.userName)}
                    {errors.userName && <span>{errors.userName.message} </span>}
                </div>
                <input type="password" placeholder="Password" name="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "*This field is mandatory"
                        },
                        minLength: {
                            value: 4,
                            message: "*The password should have at least 4 characters"
                        }
                    })}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <div className="error-text-validation">
                {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button className="send-button" type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm; 