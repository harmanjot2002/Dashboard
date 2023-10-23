import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId , localObject,handleRefresh }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Check if the script is already loaded
        if (!loaded) {
            const uwScript = document.getElementById("uw");
            if (!uwScript) {
                // If not loaded, create and load the script
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw");
                script.src =
                    "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                // If already loaded, update the state
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfig,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        // console.log(
                        //     "Done! Here is the image info: ",
                        //     result.info
                        // );
                        // console.log(result.info.secure_url)
                        setPublicId(result.info.public_id);
                        if(localObject === "users"){
                            // console.log("update the user image");
                            const loginUser = JSON.parse(localStorage.getItem("token"));
                            const allUsers = JSON.parse(localStorage.getItem("users"));
                            const index = allUsers.findIndex(user => user.email === loginUser.email);
                            allUsers[index].image = result.info.secure_url;
                            localStorage.setItem("users", JSON.stringify(allUsers));
                            localStorage.setItem("token", JSON.stringify(allUsers[index]));
                            myWidget.close();
                            handleRefresh();
                        }
                    }
                }
            );

            document.getElementById("upload_widget").addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <button
                id="upload_widget"
                className="cloudinary-button"
                onClick={initializeCloudinaryWidget}
            >
                Upload New Image
            </button>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
