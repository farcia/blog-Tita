import Api from "../../api";
import Post from "../Post";
import { useState, useEffect } from "react";
import DummyTransformData from "../../Helpers/DummyTransformData";
import PostLoader from "./PostLoader";


export default function PostList() {
    const [posts, setPosts] = useState({});
    useEffect(() => {
        Api.get('/post').then((response) => {
            setPosts(response.data);
        });

    }, [posts]);
    return (
        <>
            {
                posts?.data?.length ? posts?.data?.map(item => <Post contPost={DummyTransformData(item)} />) : <PostLoader />
            }
        </>
    )
}
