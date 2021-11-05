import { useState, useEffect } from "react";
import Api from "../../api";

export default function Comment({ postId }) {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        if (postId) {
            Api.get(`/post/${postId}/comment`).then((response) => {
                setComments(response.data);
            });
        }

    }, [comments?.total, postId]);
    return (<span>{comments?.total}</span>)
}
