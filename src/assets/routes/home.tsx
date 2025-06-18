import Context from "../components/auth/auth";

const Home = () => {
    return ( <>
    <Context.Consumer>
        { ctx => ( <> <h1>Головна сторінка</h1>
    <p>{ctx.name}</p> </> )}
    </Context.Consumer>

    </> );
}
 
export default Home;