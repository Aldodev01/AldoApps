import "./About.css";
import Axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";

const About = () => {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "employeeApp");

    Axios.post(
      "https://api.cloudinary.com/v1_1/aldodevv/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="about">
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>upload here</button>
      <Image
        style={{ width: 500 }}
        cloudName="aldodevv"
        publicId="https://res.cloudinary.com/aldodevv/image/upload/v1626776472/msyird90q0ymdhoawzdq.png"
      />
    </div>
  );
};

export default About;
