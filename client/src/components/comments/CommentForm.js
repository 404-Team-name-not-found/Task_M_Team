import React from "react";
import { useState } from "react";
import { Button, Theme } from "@dev-club/ds";
const CommentForm = ({ submitLable, handleSubmit, hasCancleButton = false, initialText = " ", handleCancle }) => {
  const [content, setcontent] = useState(initialText);
  const isDisabled = content.length === 0;
  const onSubmit = () => {
    //e.preventDefault();
    handleSubmit(content);
    setcontent('');
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" value={content} onChange={(e) => setcontent(e.target.value)} />
      <Button as="regular" background={Theme.background.yellow} color="black" onclick={()=>onSubmit()}>
          {submitLable}
        </Button>
      {hasCancleButton && (
        <Button as="regular" background="#F6C927" color="black" height={3} padding={0.2} width={10} onclick={()=>handleCancle()}>
          Cancle
        </Button>
      )}
    </form>
  );
};

export default CommentForm;
