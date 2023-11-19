function List()
{
    const fruits=["Mango","Orange","Apple"]
    const display=fruits.map((name)=>{return(<li>{name}</li>)})
    return(
        <>
        <ul>{display}</ul>
        </>
    )

}
export default List;