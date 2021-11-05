import { useState, useEffect } from "react";
import Api from "../../api";

export default function Comment({ postId, type }) {
    const [comments, setComments] = useState({});
    useEffect(() => {
        if (postId) {
            Api.get(`/post/${postId}/comment`).then((response) => {
                setComments(response.data);
            });
        }

    }, [comments, postId]);
    return (
        <>
            {type === 1 ? <span>{comments?.total}</span> : ''}
        </>
    )
}
