import { useForm } from 'react-hook-form';
import './formulario.css'
import { useState } from 'react';

function RegisraFormulario ( ) {
    const [isFormsubmitted, setFormSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        setFormSubmitted(true);
        reset();
    };

    return (
        <>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Nome: </label>
            <input className='form' type="text" {...register("nome", {required: true})} />
            {errors.nome && <span>Nome é obrigatório</span>}
        </div>
        <div>
            <label>Email: </label>
            <input className='form' type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
        </div>
        <div>
        <label>Senha: </label>
        <input className='form' type="password" {...register("senha", { required: true, minLength: 6 })} />
        {errors.senha && <span>A senha deve ter pelo menos 6 caracteres.</span>}
      </div>
      <button className='btn_submit' type="submit">Registrar</button>
        </form>
        {isFormsubmitted && <p>Mensagem de confirmação: Seu registro foi enviado com sucesso!</p>}
       
        </>

        
    )
}

export default RegisraFormulario