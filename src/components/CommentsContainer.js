import { commentsData } from "../utils/globalConstants";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ eachComment }) => {
  const { name, text } = eachComment;
  return (
    <div className="mt-3 flex flex-row items-center rounded-lg bg-gray-200 p-2 dark:bg-slate-600">
      <FaUserCircle className="h-10 w-10" />
      <div className="ml-4">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData.map((eachComment, index) => (
    <div key={index}>
      <Comment eachComment={eachComment} />
      <div className="ml-5 border border-l-black pl-5 dark:border-l-white">
        <CommentList commentsData={eachComment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="pt-4 dark:text-white">
      <h1 className="text-2xl font-bold">Comments:</h1>

      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
