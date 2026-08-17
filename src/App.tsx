import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import CreatePost from "@/pages/CreatePost";
import Post from "@/pages/Post";
import "./App.css";
import Account from "@/pages/Account";  
import UserProfile from "@/pages/UserProfile.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/user/me" element={<Account />} />
      <Route path="/user/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default App;