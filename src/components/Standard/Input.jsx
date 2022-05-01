import styled from 'styled-components'

const Input = ({ label, type, change, value }) => {
    return (
        <div>
            <label>{label}</label>
            <StyledInput
                type={type}
                onChange={(e) => change(e.target.value)}
                value={ value }
            />
        </div>
    )
}

export default Input

const StyledInput = styled.input`
    width: 100%;
    border: none;
    padding: 5px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    caret-color: #F03A17;
    border: 2px solid white;
    transition: 0.1s;
    font-size: 14px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: rgb(243, 246, 252);
    border-radius: 2px;

    &:focus {
        outline: none;
        border: 2px solid #F03A17;
        border-radius: 2px;
    }
`