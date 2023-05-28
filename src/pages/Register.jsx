// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Add from "../img/addAvatar.png"
// import { createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";
// import { auth, storage, db } from "../firebase"
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc, } from "firebase/firestore";


// const Register = () => {
//   const [err, setErr] = useState(false)
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(e.target[0].value)
//     console.log(e.target[1].value)
//     console.log(e.target[2].value)
//     console.log(e.target[3].value)
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password)

//       const storageRef = ref(storage, displayName);

//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on(

//         (err) => {
//           setErr(true);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });


//             await setDoc(doc(db, "userChats", res.user.uid), {});
//           navigate("/");




//           });
//         }
//       );
//     } catch (err) {
//       setErr(true);

//     }
//   }
//   return (
//     <div className='formContainer'>
//       <div className="formWrapper">
//         <span className="logo">Let's Chat</span>
//         <span className="title">Register</span>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder='Display Name' />
//           <input type="email" placeholder='Enter email' />
//           <input type="text" placeholder='Enter password' />
//           <input style={{ display: "none" }} type="file" id="file" placeholder='Your Avatar' />
//           <label htmlFor='file'>
//             <img src={Add} alt="" />
//             <span>Select your Avatar</span>
//           </label>
//           <button>Register</button>
//           {err && <span>Something went wrong!... Please check the fields</span>}
//         </form>
//         <p>Already have an account?  <Link to="/login">Login here!</Link> </p>
//         {/* <p>Already have an account Login Here!</p> */}
//       </div>
//     </div>
//   )
// }

// export default Register


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import Add from "../img/addAvatar.png"
import { auth, storage, db } from "../firebase.js"

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    if (!file) {
      console.log("No file found!")
    }

    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, 'users', res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
           await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");

          console.log("Sign up successful")



        });
      }
      );
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />
          <input style={{ display: 'none' }} type="file" id="file" onChange={handleFileChange} />
          <label htmlFor='file'>
            <img src={Add} alt="" />
            <span>Select your Avatar</span>
          </label>
          <button>Register</button>
          {err && <span>Something went wrong!... Please check the fields</span>}
        </form>
        <p>Already have an account?  <Link to="/login">Login here!</Link> </p>
      </div>
    </div>
  );
};

export default Register;