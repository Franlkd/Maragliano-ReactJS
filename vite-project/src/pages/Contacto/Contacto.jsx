import { useState } from "react";
import { useForm } from "react-hook-form"

export const Contacto = () => {

    const { register, handleSubmit, reset } = useForm();

    const enviar = (data) => {
        console.log(data);
        reset()
    }

    const enviarForm = () => {
        reset();
    };


    return(
        <div className="container-contacto">

            <div className="main-contact">
                <h1 className="titulo">CONTACTO:</h1>
                <p>341-832-1236</p>
                <p>Mail: TecnoPC@gmail.com</p>
            </div>

            <div className="Forms">

                <form className="Formulario" onSubmit={handleSubmit(enviar)}>

                    <input type="text" placeholder="Nombre" className="textInput" {...register("nombre")}/>
                    <input type="email" placeholder="E-mail" className="textInput" {...register("E-mail")}/>
                    <textarea className="textInput" {...register("mensaje", { required: true })}/>

                    <button className="enviar" type="submit" onClick={enviarForm}>Enviar</button>
                </form>
                
            </div>

            
        </div>
    )
}