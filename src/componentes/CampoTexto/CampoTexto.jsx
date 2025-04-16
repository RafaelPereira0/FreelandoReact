import styled from "@emotion/styled/macro"

const LabelEstilo = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`

const InputEstilo = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin-top: ${props => props.theme.espacamentos.xs};
    background: ${props => props.theme.cores.branco};
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    height: 40px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`

export const CampoTexto = ({titulo}) => {
    return(
        <LabelEstilo>
            {titulo}
            <InputEstilo/>
        </LabelEstilo>
    )
}