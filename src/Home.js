import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs ")
            .then( (res) => {
                if(!res.ok){
                    throw Error("could not fetch data"); 
                }
                return res.json();
            })
            .then( (data) => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch( (e) => { 
                setIsLoading(false);
                setError(e.message);
            }); 
        }, 1000)
    }, []);  
 


    return ( 
        <div className="home">
          {error && <p> {error} </p>}
          { blogs &&  <BlogList blogs = {blogs} title= "All Blogs!" />  }
          {isLoading && <div>loading ... </div> }
        </div>
     );
}

export default Home;