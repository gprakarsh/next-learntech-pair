import Link from "next/link";

const NavBar = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>
  {
      `a{
         text-decoration:none;
         color: #988829;
         font-size:45px;
         margin:5px;
         bax-shadow: #988829 2px 2px 2px 2px;	
      }
      a:hover{
          color:white;
      }
      nav{
          background:#242424;
          width:13vw;
          display:flex;
          justify-content:center;
      }`
}</style>
  </nav>
  
);

export default NavBar;
