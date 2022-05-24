import { useState , useEffect} from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: "how be a ninja" , body: "lorem ipsum...", auther: "mario", id: 1},
            {title: "how to code" , body: "lorem ipsum...", auther: "luigi", id: 2},
            {title: "how code like a ninja" , body: "lorem ipsum...", auther: "mario", id: 3}
        ]
    )

    const [name, setName] = useState("mario");
    

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
      }

    useEffect(() => {
        alert("use effect ran"); 
    }, [name]); 
    return ( 
        <div className="home">
           <BlogList blogs = {blogs} title= "All Blogs!" handleDelete = {handleDelete}/>
           <button onClick={ () => setName("luigi")}>change name </button>
           <p>{name}</p>
        </div>
     );
}

export default Home;