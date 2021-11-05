import { useState, useEffect } from "react";
import Api from "../../api";
import CommentList from "./CommentList";

export default function Comment({ postId, type }) {
    const [comments, setComments] = useState({});
    useEffect(() => {
        if (postId && type) {
            Api.get(`/post/${postId}/comment`).then((response) => {
                setComments(response.data);
            });
        }

    }, [comments, postId]);
    return (
        <>
            {type === 1 ? <span>{comments?.total}</span> : ( comments && comments?.data.length ? comments.data.map((item)=>CommentList(item)) : '' )}
        </>
    )
}
