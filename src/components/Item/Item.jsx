import Variant2 from './Variant2'
import Variant3 from './Variant3'

const Item = ({ variant, data }) => {
    //#TODO delete variant 1
    return (
        <>
            { variant === 2 ?
                <Variant2 data = { data } />
            :
                <Variant3 data = { data } />
            }
        </>
    )
}

export default Item