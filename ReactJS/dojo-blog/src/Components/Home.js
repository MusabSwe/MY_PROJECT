const Home = () => {
    // e --> event object
    const handleClick = (e) => {
        console.log('Hello ninjas', e);
    };
    // to invoke this methid we should 
    // implement anonymous function to invoke 
    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }
    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Test</button>
            <button onClick={(e) => handleClickAgain("MUSAB", e)}>Test</button>
        </div>
    );
}

export default Home;
