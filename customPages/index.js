
import Posts from "./posts";
import Home from "./home";
import AboutUs from "./aboutUs";

const CustomPages = {
    "home":{
        "title":"Home",
        "component": Home
    },
    "posts": {
        "title": "Posts",
        "component": Posts
    },
    "aboutus":{
        "title":"About Us",
        "component":AboutUs
    }
}

export default CustomPages;
