// Module imports -------------------------------
import axios from "axios";

const serverUrl: string = "https://linkn-server.vercel.app/";
// const serverUrl: string = "http://localhost:3000/";

const sendImage = async (imageAsText: string) => {

    // console.log("Sending this image");
    // console.log(imageAsText);

    axios({
        method: "post", 
        url: serverUrl, 
        data: {
            action: "uploadimage", 
            username: "John Doe", 
            dateCreated: new Date(), 
            image: JSON.stringify(imageAsText), 
            descriptor: "pfp"
        }
    }).then((response) => {
        console.log(response);
    });
}

export default sendImage;