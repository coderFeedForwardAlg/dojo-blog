import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {title: "how to ninja" , body: "lorem ipsum...", auther: "mario", id: 1},
            {title: "how to code" , body: "lorem ipsum...", auther: "luigi", id: 1},
            {title: "how to ninja-code" , body: "lorem ipsum...", auther: "bob", id: 1}
        ]
    )
    
    return ( 
        <div className="home">
            
        </div>
     );
}

export default Home;