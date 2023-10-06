import ListItem from "../molecules/ListItem"


const List = ({ people }) => {

    return(
        <div>
            {
                people.data.map( (item, index) => {

                    return( 
                        <ListItem key={ item.id }
                                  item={ item} />
                    )
                })
            }
        </div>
    )

}

export default List