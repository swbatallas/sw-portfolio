import React from 'react'
import { Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
    const { register, formState: { errors }, handleSubmit } = useForm()

    function onSubmit(data) {
        console.log(data)
    }
    return (
        <div className="mx-5 my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text"
                        {...register('nombre', { required: true })}
                        placeholder="Nombre" />
                    {errors.nombre?.type === 'required' && <p>introduce un nombre</p>}
                </div>
                <div>
                    <label>Correo</label>
                    <input type='email'
                        {...register('email', { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ })}
                        placeholder='email' />
                    {errors.email?.type === 'required' && <p>introduce un email</p>}
                    {errors.email?.type === 'pattern' && <p>Formato de email incorrecto</p>}

                </div>
                <div>
                    <label>Asunto</label>
                    <input type='text'
                        {...register('subject', { required: true })}
                        placeholder='asunto' />
                </div>
                <div>
                    <label>Mensaje</label>
                    <textarea {...register('mensaje')} placeholder="Mensaje" />
                </div>
                <Button type='submit'>Enviar</Button>
            </form>
        </div>
    )
}