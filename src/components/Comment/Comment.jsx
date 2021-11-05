import { useState, useEffect } from "react";
import Api from "../../api";
import Moment from "moment";

export default function Comment({ postId, type }) {
    const [comments, setComments] = useState(null);
    useEffect(() => {
        if (postId && type) {
            Api.get(`/post/${postId}/comment`).then((response) => {
                setComments(response.data);
            });
        }

    }, [comments?.total, postId, type]);
    return (
        <>
            {type === 1 ? <span>{comments?.total}</span> : ( comments && comments?.data.length ? comments.data.map((item)=>{
                let $created_at = Moment(item.publishDate).tz('America/Bogota');
                return (
                        <div className="contComentItem">
                            <div className="contDataAuthor">
                                <div className="contImg">
                                    <img src={item.owner.picture} alt="img del Autor" />
                                </div>
                                <div className="contName">
                                    <span className="name"><small>Autor</small> {item.owner.firstName + ' ' + item.owner.lastName} </span>
                                </div>
                                <div className="contDate">
                                    <span className="name">{$created_at.format('dd/MM/YYYY, h:mm:ss a')}</span>
                                </div>
                            </div>
                            <div className="contText">
                                <p>{item.message}</p>
                            </div>
                        </div>
                        )
            }) : '' )}
        </>
    )
}
