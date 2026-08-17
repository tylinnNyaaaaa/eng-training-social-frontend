import PostCard from "@/components/PostCard";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button.tsx";
import { PlusIcon } from "@heroicons/react/24/solid";
import "./Home.css";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate(); 
  return (
    <div className="main-container">
      <div className="content-scroll">
        <div className="button-container">
          <Button
            className="new-post-button"
            onClick={() => navigate("/post/create")} 
          >
            <PlusIcon className="md-icon" />
            <p>New Post</p>
          </Button>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className="sticky-nav">
        <Navigation />
      </div>
    </div>
  );
}