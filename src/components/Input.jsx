import { GrupoInput, IconoValidacion, Label, LeyendaError, InputStyled, ContainerInput } from "../elements/styledComponents";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
export const Input = ({ estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion }) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    }

    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: 'true' });
            } else {
                cambiarEstado({ ...estado, valido: 'false' });

            }
            if (estado.campo === '') {
                cambiarEstado({ ...estado, valido: 'null' });
            }
        }

    }
    return (
        <ContainerInput>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            <GrupoInput>
                <InputStyled
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    autoComplete='off'
                    name={name}
                />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </ContainerInput>
    )
}
