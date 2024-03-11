import React from "react";

import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import  styled from "styled-components"

export const Appcontainer = styled.div`
position: absolute;
top: 50px;
background:linear-gradient(rgba(138, 153, 206, 0.50), rgba(30, 68, 138, 0.75)) ;
height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const GoodForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch("password");

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log("RENDER");

  return (
    <Appcontainer>
      <div className="form-group">
        <label>Name</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu Nome"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="error-message">Nome é Obrigatório.</p>
        )}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors?.email && "input-error"}
          type="email"
          placeholder="Seu e-mail"
          {...register("email", {
            required: true,
            validate: (value) => isEmail(value),
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="error-message">Email é Obrigatório.</p>
        )}

        {errors?.email?.type === "validate" && (
          <p className="error-message">Email é Obrigatório.</p>
        )}
      </div>

      <div className="form-group">
        <label>Bilhete De Identidade</label>
        <input
          className={errors?.BI && "input-error"}
          type="text"
          placeholder="Bilhete"
          {...register("Bilhete", { required: true, minLength: 12 })}
        />

        {errors?.BI?.type === "required" && (
          <p className="error-message">BI é Obrigatório.</p>
        )}

        {errors?.Bilhete?.type === "minLength" && (
          <p className="error-message">
           Bilhete Precisa ter no máximo 12 caracteres.
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Data Do Agendamento</label>
        <input
          className={errors?.dataAgendamento && "input-error"}
          type="date"
         
          {...register("dataAgendamento", {
            required: true,
           
          })}
        />
       
      </div>
      <div className="form-group">
        <label>Escolhe a Agencia</label>
        <select
          className={errors?.agencia && "input-error"}
          defaultValue="0"
          {...register("agencia", { validate: (value) => value !== "0" })}
        >
          <option value="0">selecionar agencia...</option>
          <option value="developer">Talatona</option>
          <option value="other">Viana</option>
          <option value="developer">Talatona</option>
          <option value="other">Viana</option>
        </select>

        {errors?.agencia?.type === "validate" && (
          <p className="error-message">agencia é obrigatório</p>
        )}
      </div>
      <div className="form-group">
        <label>Tipo de Documento</label>
        <select
          className={errors?.TipoDocumento && "input-error"}
          defaultValue="0"
          {...register("TipoDocumento", { validate: (value) => value !== "0" })}
        >
          <option value="0">Seleciona o Tipo de Documento...</option>
          <option value="developer">Bilhete</option>
          <option value="other">Passport</option>
          <option value="developer">Bilhete</option>
          <option value="other">Passport</option>
        </select>

        {errors?.profession?.type === "validate" && (
          <p className="error-message">Profession is required.</p>
        )}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            // name="privacy-policy"
            {...register("privacyTerms", {
              validate: (value) => value === true,
            })}
          />
          <label>Eu aceito os termos de Privacidade.</label>
        </div>

        {errors?.privacyTerms?.type === "validate" && (
          <p className="error-message">
           Você deve Aceitar os termos.
          </p>
        )}
      </div>

      <div className="form-group">
        <button onClick={() => handleSubmit(onSubmit)()}>Agendar Agora</button>
      </div>
    </Appcontainer>
  );
};

export default GoodForm;