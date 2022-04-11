import styled from 'styled-components'

const Loader = () => {
    return(
        <LoaderContainer>
            <h1> Loading manga... </h1>
            <img src="/imgs/loader.gif" alt="Loading data animation" />
        </LoaderContainer>
    )
}

export default Loader

const LoaderContainer = styled.picture`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 6em;
    }

    h1 {
        font-size: 10px;
    }
`;