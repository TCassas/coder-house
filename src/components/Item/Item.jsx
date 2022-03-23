import Variant1 from './Variant1'
import Variant2 from './Variant2'

const Item = ({ variant, data , initial }) => {
    return (
        <>
            { variant == 1 ?
                <Variant1 data={ data } initial={ initial } />
            :
                <Variant2 data={ data } />
            }
        </>
    )
}

export default Item