import NavBar from "../components/NavBar";


const post = (props) =>{
    return(
        <>
        <NavBar/>
        <h1>{props.show.name}</h1>
        <img src={props.show.image.medium}/>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </>
    )
}

post.getInitialProps = async(context)=>{
    const {id} = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(show.name)

    return {show}
}

export default post