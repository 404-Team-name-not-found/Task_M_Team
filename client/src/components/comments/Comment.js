import { Button, Card, Theme } from "@dev-club/ds";
import React from "react";
import CommentForm from "./CommentForm";

const Comment = ({ comment, currentUserId, deleteComment, activeComment,setActiveComment,updateComment }) => {
  const fiveMin = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMin;
  const canEdit = currentUserId === comment.userId && !timePassed;
  const canDelete = currentUserId === comment.userId;
  const isEdit = activeComment && activeComment.type==='edit' && activeComment.id===comment.id;
  return (
    <Card height={5} width={20} color={Theme.background.blue} >
    <div className="comment">
      <div className="comment-image-container">
        <img src="/user-icon.png"></img>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{new Date(comment.createdAt).toLocaleString()}</div>
        </div>
        {!isEdit ? <div className="comment-text">{comment.body}</div> : <CommentForm submitLable={"update"} hasCancleButton initialText={comment.body} handleSubmit={(text)=>updateComment(text,comment.id)} handleCancle={()=>setActiveComment(null)}></CommentForm>}
        <div className="comment-actions">
          {canDelete && (
            <Button as="regular" background="#F6C927" color="black" height={3} padding={0.2} width={10} onclick={() => deleteComment(comment.id)}>
              Delete
            </Button>
          )}
          {canEdit && (
            <Button as="regular" background="#F6C927" color="black" height={3} padding={0.2} width={10} onclick={() => setActiveComment({id:comment.id,type:"edit"})}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
    </Card>
  );
};

export default Comment;
