import {useState, useEffect} from 'react';
import Api from "../../api";
import * as moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';



function CommentList( { postId }) {
    const noScroll = () => {
        let body = document.querySelector('body');
        if(!body.classList.contains('noScroll')){body.classList.add('noScroll')}
    }
    const activeModal = () => {
        let modal = document.querySelector('.modal');
        if(!modal.classList.contains('active')){modal.classList.add('active')}
    }
    const activeModalContainer = () => {
        let modalContainer = document.querySelector('.modalContainer');
        if(!modalContainer.classList.contains('active')){modalContainer.classList.add('active')}
    }
    const [comments, setComments] = useState(null);
    useEffect(() => {
        if (postId) {
            Api.get(`/post/${postId}/comment`).then((response) => {
                setComments(response.data);
                noScroll();
                activeModal();
                activeModalContainer();
            });
        }

    }, [ comments?.data?.length, postId ]);
    return (
        <>
        {
            comments?.data?.length ? comments.data.map((item, index)=> {
                let $created_at = moment(item.publishDate).tz('America/Bogota');
                return (
                        <div key={'comment'+index} className="contComentItem">
                            <div className="contDataAuthor">
                                <div className="contImg">
                                    <img src={item.owner.picture} alt="img del Autor" />
                                </div>
                                <div>
                                    <div className="contName">
                                        <span className="name"><small>Autor </small> {item.owner.firstName + ' ' + item.owner.lastName} </span>
                                    </div>
                                    <div className="contDate">
                                        <span className="name"> {$created_at.format('DD/MM/YYYY, h:mm:ss a')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contText">
                                <small>Comentario </small>
                                <p>{item.message}</p>
                            </div>
                        </div>
                        )
                }): <div><h2>Este post no tiene comentarios</h2></div>
        } 
        </>
    )
}

export default CommentList
