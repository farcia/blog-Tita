import Api from "../../api";
import Post from "../Post";
import { useState, useEffect } from "react";
import DummyTransformData from "../../Helpers/DummyTransformData";
import PostLoader from "./PostLoader";


export default function PostList() {
    const [posts, setPosts] = useState({});
    const [tagId, setTag] = useState(null);
    useEffect(() => {
        if(tagId){
            Api.get(`/tag/${tagId}/post`).then((response) => {
                setPosts(response.data);
                cleanBtn()
            });

        } else {
            Api.get('/post').then((response) => {
                setPosts(response.data);
            });
        }

    }, [posts?.data?.length, tagId]);
    const cleanBtn = () => {
        const cleanBtnElement = document.getElementById('cleanBtn');
        if(!cleanBtnElement.classList.contains('active')){
            cleanBtnElement.classList.add('active');
        }
    }

    const handleClickTag = (tagId) => {
        setPosts(null);
        setTag(tagId)
    }
    
    return (
        <>
            <div></div>
            {
                posts?.data?.length ? posts?.data?.map((item, index) => <Post setTag={handleClickTag} key={'post' + index} contPost={DummyTransformData(item)} />) : <PostLoader />
            }
        </>
    )
}
