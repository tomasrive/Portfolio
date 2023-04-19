import { useState, useRef } from "react";
import { Boton, ContenedorBotonCentrado, DivContainer, DivTitleContainer, Formulario, MensajeError, MensajeExito, SectionContainer } from "../elements/styledComponents";
import { Input } from '../components/Input.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

export const CompContact = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [mensaje, cambiarMensaje] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const form = useRef();

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        mensaje: /^[a-zA-Z0-9À-ÿ\s^.,/?¿]{3,200}$/,
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            nombre.valido === 'true' &&
            correo.valido === 'true' &&
            mensaje.valido === 'true'
        ) {
            console.log();
            emailjs.sendForm('service_an7xxae', 'template_35uf3lv', form.current, 'uNZTiUl8oG29L7z6V')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

            cambiarNombre({ campo: '', valido: null });
            cambiarCorreo({ campo: '', valido: null });
            cambiarMensaje({ campo: '', valido: null });

            setTimeout(() => {
                cambiarFormularioValido(null)
            }, 3000)
            cambiarFormularioValido(true);
        } else {
            setTimeout(() => {
                cambiarFormularioValido(null)
            }, 3000)
            cambiarFormularioValido(false)
        }
    }
    return (
        <SectionContainer id="contact">
            <DivContainer>
                <DivTitleContainer>
                    <h1>04.Contacto</h1>
                    <hr />
                </DivTitleContainer>

                <Formulario ref={form} onSubmit={onSubmit}>
                    <Input
                        estado={nombre}
                        cambiarEstado={cambiarNombre}
                        tipo="text"
                        label="Nombre"
                        placeholder="Nombre"
                        name="user_name"
                        leyendaError="El nombre solo puede contener letras y espacios. Maximo 40 caracteres."
                        expresionRegular={expresiones.nombre}
                    />
                    <Input
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="email"
                        label="Correo Electrónico"
                        placeholder="Correo Electrónico"
                        name="user_email"
                        leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                        expresionRegular={expresiones.correo}
                    />
                    <Input
                        estado={mensaje}
                        cambiarEstado={cambiarMensaje}
                        tipo="text"
                        label="Mensaje"
                        placeholder="Mensaje"
                        name="message"
                        leyendaError="El mensaje solo puede contener letras y espacios. Maximo 200 caracteres."
                        expresionRegular={expresiones.mensaje}
                    />

                    {formularioValido === false &&

                        <MensajeError>
                            <p>
                                <FontAwesomeIcon icon={faExclamationTriangle} />
                                <b>Error:</b> Por favor rellena el formulario correctamente.
                            </p>
                        </MensajeError>
                    }

                    {formularioValido === true &&
                        <MensajeExito>
                            <p>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <b>Exito:</b> El formulario se ha enviado correctamente.
                            </p>
                        </MensajeExito>
                    }

                    <ContenedorBotonCentrado>
                        <Boton type="submit" value='Send'>Enviar</Boton>
                    </ContenedorBotonCentrado>
                </Formulario>

            </DivContainer>
        </SectionContainer>
    )
}
