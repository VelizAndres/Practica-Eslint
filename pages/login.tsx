import { useForm } from 'react-hook-form';
import styles from '@/styles/Tareas.module.css';

function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const guardar = data => {
    console.log('Bienvenido', data);
  };

  return (
    <section>
      <div className={styles.contenedorTitle}>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit(guardar)}>
        <div className={styles.contenedorInput}>
          <p>Correo = </p>
          <input
            className={styles.inputText}
            {...register('Correo', {
              pattern: /[A-Za-z0-9]+@[a-z]+.com$|es$/,
              required: true,
            })}
            placeholder="Ingrese Correo"
          />
          {errors.Correo && (
            <p className={styles.alerta}>Debe ingresar correo valido</p>
          )}
        </div>
        <div className={styles.contenedorInput}>
          <p>Contraseña = </p>
          <input
            type="Password"
            className={styles.inputText}
            {...register('Pass', {
              pattern: /[A-Za-z0-9]+/,
              minLength: 8,
              required: true,
            })}
            placeholder="Ingrese Contraseña"
          />
          {errors.Pass && (
            <p className={styles.alerta}>Debe ingresar contraseña valida</p>
          )}
        </div>
        <div className={styles.contenedorInput}>
          <input className={styles.buttonInput} type="submit" />
        </div>
      </form>
    </section>
  );
}

export default FormPage;
