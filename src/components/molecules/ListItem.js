import TitleText from "../atoms/TitleText"
import InfoText from "../atoms/InfoText"

const ListItem = ( { item } ) => {

    const txt = `${ item.firstname } ${ item.lastname }`

    return (
        <div className="ListItem">
            <TitleText text={ txt } />
            <div className="item-content">
                <InfoText text={ item.email } />
                <InfoText text={ item.phone } />
            </div>

        </div>

    )
}

export default ListItem