import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  // get content from useContext UserAuth()
  const { user, logout } = UserAuth();
  const {posts} = UserAuth();
  // console.log(posts);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="">
      <h1 className="">Your Account (protected route)</h1>
      <p>You are logged in by User Email: {user && user.email}</p>

      <button onClick={handleLogout} className="">
        Logout
      </button>

      <h1>Blog Posts</h1>
      
        {/* loop through the Json "posts" */}
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2 className="">{post.title}</h2>
              <p className="">{post.content}</p>
              <img src={post.url} alt="Logo" width="100"/>
            </div>
          )
        })}
        
      
    </div>
  );
};

export default Account;
