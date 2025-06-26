import {React, useState, useEffect} from 'react'
import {Routes, Route, Link, useParams, Navigate} from 'react-router-dom'

function Routing() {
  return (
    <div>
        <h2>Routing Example</h2>
        <nav>
            <ul>
                <li>
                  <Link to="/home">Home Page</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/list">Listing</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route  path="/home" element={<Home></Home>}></Route>
            <Route  path="/about/*" element={<About></About>}></Route>
            <Route  path="/list" element={<Listing></Listing>}></Route>
            {/*the below route is a dynamic route*/}
            <Route  path="/users/:id" element={<Users></Users>}></Route>
            {/*redirecting routing*/}
            <Route path="/" element={<Navigate to ="/home"></Navigate>}></Route>
            {/*the below path "*" is a valid card entry*/}
            <Route  path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
    </div>
  )
/*
1. normal routing 
2. link tag - when ever we use this tag then reload deosnt happen when we go from one page to another page 
3. dynamic routing/template routng 
4. nested routing
5. custom loading
*/

  function Users() {
    let params = useParams();
    let [user, setUser] = useState(null);//user == null 
    useEffect(() => {
      console.log("rendered run");
      (async function () {
        const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
        const userData = await resp.json();
       setUser(userData);
      })()
    });
    console.log("rendered");
    return (
      <>
       {user == null ? <h3>Loading...</h3> :
      <>
        <h3>user name: {user.username}</h3>
        <h3>Name: {user.name.firstname + " " + user.name.lastname}</h3>
      </>
        }
      </>
    )
  }
  function Home() {
    return <h3>Home Page</h3>
  }

  function About() {
    return (
      <>
        <h3>About Section</h3>
        <Routes>
          <Route path="company" element={<Company></Company>}></Route>
          <Route path="founder" element={<Founder></Founder>}></Route>
        </Routes>
      </>
    )
  }

  function Company() {
    return <h2>Congratulated!!! you are the part of NxtWave</h2>
  }

  function Founder() {
    return <h2>Founder of NxtWave is Rahul Attulari</h2>
  }

  function Listing() {
    return <h3>Listings Page</h3>
  }

  function PageNotFound() {
    return <h3>Page not found</h3>
  }

}

export default Routing