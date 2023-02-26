// Hook
import BlogList from "./BlogList";
import useFetch from "../useFetch";
const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* conditional optional 
            since the data we retrieve it using fetch and need some time to retrieve 
            so we make this conditdion until the DB be ready to retrieve 
            */}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    );
}

export default Home;
