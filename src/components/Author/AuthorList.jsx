import { useState, useEffect } from "react";
import Api from "../../api";

function ModalAuthor({ authorId }) {
    const [authorData, setAuthor] = useState(null);
    useEffect(() => {
        if (authorId) {
            Api.get(`/user/${authorId}`).then((response) => {
                setAuthor(response.data);
                noScroll();
                activeModal();
                activeModalContainer();
            });
        }

    }, [authorId])

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
    return (
        <>
            {
            authorData?
                <div className="contComentItem">
                    <div className="contDataAuthor">
                        <div className="contImg">
                            <img src={authorData.picture} alt="img del Autor" />
                        </div>
                        <div>
                            <div className="contName">
                                <span className="name"><small>Autor </small> {authorData.firstName + ' ' + authorData.lastName} </span>
                            </div>
                            <div className="contDate">
                            </div>
                        </div>
                    </div>
                    <div className="contText">
                        <small>Datos del autor</small>
                        <div className="contData">
                            <span className="data"><b>Teléfono:</b> {authorData.phone} </span>
                        </div>
                        <div className="contData">
                            <span className="data"><b>Correo:</b> {authorData.email} </span>
                        </div>
                        <div className="contData">
                            <span className="data"><b>País:</b> {authorData.location.country} </span>
                        </div>
                        <div className="contData">
                            <span className="data"><b>Ciudad:</b> {authorData.location.city} </span>
                        </div>
                    </div>
                </div>
                : ''
            }
        </>

    )
}

export default ModalAuthor
