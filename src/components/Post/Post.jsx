import Comment from '../Comment';
import ModalBase from "../ModalBase";
import ModalComments from "../ModalComments";
import ModalAuthor from "../ModalAuthor/ModalAuthor";
import React, { useState } from "react";

export default function Post({ contPost}) {
    const [modalComentsOpen, setModalComentsOpen] = useState(false);

    const [modalAuthorOpen, setModalAuthorOpen] = useState(false);
  

    return (
    
        <>
            <div className="itemPost">
                <div className="contImg">
                    <img src={contPost.img} alt="img del Autor" />
                </div>
                <div className="contData">
                    <div className="contDataAuthor">
                        <div className="contImg">
                            <img src={contPost.authorAvatar} alt="img del Autor" />
                        </div>
                        <div className="contName">
                            <span className="name" ><small>Autor | <span className="link" onClick={()=>{setModalAuthorOpen(true)}}>Ver más detalle</span></small>{contPost.authorName}</span>
                        </div>
                    </div>
                    <div className="contText">
                        <p>{contPost.postText}</p>
                    </div>
                    <div className="contBtnComments">
                        <button onClick={() => { setModalComentsOpen(true); }}>Ver comentarios</button>
                    </div>
                    <div className="contLiks">
                        <span>Likes: <span>{contPost.postLikes}</span></span>
                    </div>
                    <div className="contComments">
                        <span>Comentarios: {<Comment postId={contPost.id} type={1} />}</span>
                    </div>
                    <div className="contTags">
                        {contPost.postTags.map((item, index) => <span key={'tag'+index} className="tag">{item}</span>)}
                    </div>
                </div>
            </div>
            {modalComentsOpen && <ModalBase children={<ModalComments postId={contPost.id} />} setOpenModal={setModalComentsOpen} />}
            {modalAuthorOpen && <ModalBase children={<ModalAuthor author={{}} />} setOpenModal={setModalAuthorOpen} />}
        </>
    )
}