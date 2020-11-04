import React, {useState} from 'react';
import ReactDOM, {render} from 'react-dom';
import { storage } from "./firebase";
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';


//style sheet 


const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
  
`;

  const Input = styled.input`
   height: 2.5rem;
   width: 20rem;
   margin-top: 1em;
   outline: none;
   text-indent: em;
   font-size: 1em;
   text-align: center;
   display:center;
`;



 const Button = styled.button`
   height: 2.5rem;
  padding: 0 1em;
   outline: none;
   cursor: pointer;
   background: #222;
   border: none;
   color: #fff;
   font-size: 1em;
   
   margin-left:auto;
   margin-right:auto;
   display:block;
   margin-top:1%;
   margin-bottom:0%;
     
 `;

 
 
//   style sheet ends here 



const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div> 

      <Header>
      <H1>Imgur ALternative </H1>
      <p>All rights reserved to the members of this milestone team only.</p>
      <p>copyrights Free images use wisely.</p>
      </Header>
      <br />
      <progress  value={progress} max="100"  /> 
      <br />
       <div>
       
      <Input type="file"  onChange={handleChange} />

      <Button id='img'  onClick={handleUpload}>Upload</Button>   

      </div>   
    </div>
  );
};


ReactDOM.render(
  <React.StrictMode>
  <ReactFirebaseFileUpload />,
  <index />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
