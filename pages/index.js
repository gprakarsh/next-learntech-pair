import NavBar from "./../components/NavBar";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const index = props => {
  const mapper = props.shows.map(({ show }) => {
    return (
      <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
        <li><img src={`${show.image.medium}`}/></li>
      </Link>
    );
  });

  return (
    <>
      <NavBar />
      <h1>Batman is Real -Tyson Hancock</h1>
      <ul>{mapper}</ul>
      <h3>{props.joke}</h3>
      <style jsx>{`
      ul{
          display:flex;
          flex-wrap:wrap;
          list-style:none;  
      }
      h3{
          text-align:right;
          position:relative;
          bottom:20vh;
          right:8vw;
          font-size:15px;
      }
      `}</style>
    </>
  );
};

index.getInitialProps = async function(context) {
  const res1 = await fetch("https://geek-jokes.sameerkumar.website/api");
  const data1 = await res1.json();

  const res2 = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data2 = await res2.json();

  console.log("data fetched: ", data1, data2.length);

  return {
    joke: data1,
    shows: data2
  };
};

export default index;
