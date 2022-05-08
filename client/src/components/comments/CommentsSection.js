import React from "react";
import { getComments, createComment, deleteComment as deleteCommentAPI } from "../mockdata";
import { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
const CommentsSection = ({ currentUserId }) => {
  const [backendComments, setbackendComments] = useState([]);

  useEffect(() => {
    getComments().then((data) => setbackendComments(data));
  }, []);
  const rootComments = backendComments.filter((comment) => comment.parentId === null);

  const addComment = (content) => {
    createComment(content).then((c) => setbackendComments([c, ...backendComments]));
  };
  const deleteComment = (id) =>
    deleteCommentAPI(id).then(() => {
      const updatedComments = backendComments.filter((c) => c.id !== id);
      setbackendComments(updatedComments);
    });

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write Comment</div>
      <CommentForm submitLable="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((comment) => (
          <Comment key={comment.id} comment={comment} currentUserId={currentUserId} deleteComment={deleteComment} isEdit={isEdit} />
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
