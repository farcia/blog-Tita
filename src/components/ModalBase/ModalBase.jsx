

export default function ModalBase({children, setOpenModal}) {
    const noScroll = () => {
        let body = document.querySelector('body');
        if(body.classList.contains('noScroll')){body.classList.remove('noScroll')}
    }
    return (
        <div className="modal">
            <div className="modalContainer">
                <div  onClick={() => {setOpenModal(false);noScroll()}} className="closeBtn">
                    <span className="iconClose"></span>
                </div>
                { children }
            </div>
        </div>
    )
}
