import styled from 'styled-components'

const Dummy = () => {
    return (
        <ItemContainer>
            <LeftSide>
                <p>#####################</p>
                <p>##########</p>
                <div>
                    <p>#####</p>
                </div>
            </LeftSide>
            <RightSide />
        </ItemContainer>
    )
}

export default Dummy

const ItemContainer = styled.article`
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 75px;
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 300px;
    transition: 0.4s;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    }
`;

const RightSide = styled.picture`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: rgb(183, 183, 183);
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: hsl(0, 0%, 89.41176470588236%);
    padding: 10px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;

    div {
        display: flex;
        justify-content: flex-end;
    }

    p {
        background-color: rgb(183, 183, 183);
        color: rgb(183, 183, 183);
        border-radius: 6px;
        width: fit-content;
    }
`;
