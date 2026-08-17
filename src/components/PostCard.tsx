import "./PostCard.css";
import {
  UserCircleIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

export default function PostCard({
  showCommentsIcon = true,
}: {
  showCommentsIcon?: boolean;
}) {
  return (
    <div className="card-container">
      <div className="user-info">           {/* new */}
        <UserCircleIcon className="lg-icon" /> {/* new */}
        <p>John Doe</p>                     {/* new */}
      </div>                                {/* new */}
      <h1 className="card-title">Lorem ipsum dolor sit amet consectetur.</h1>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="reaction-container">
        <HandThumbUpIcon className="md-icon" />
        <HandThumbDownIcon className="md-icon" />
        {/* Conditionally render comment icon */}
        {showCommentsIcon && <ChatBubbleOvalLeftIcon className="md-icon" />}
      </div>
    </div>
  );
}