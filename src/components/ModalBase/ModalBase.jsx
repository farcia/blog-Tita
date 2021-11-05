export default function ModalBase({children, setOpenModal}) {
    const noScroll = () => {
        let body = document.querySelector('body');
        if(body.classList.contains('noScroll')){body.classList.remove('noScroll')}
    }
    const activeModal = () => {
        let modal = document.querySelector('.modal');
        if(modal.classList.contains('active')){modal.classList.remove('active')}
    }
    const activeModalContainer = () => {
        let modalContainer = document.querySelector('.modalContainer');
        if(modalContainer.classList.contains('active')){modalContainer.classList.remove('active')}
        setTimeout(function(){ setOpenModal(false); }, 400)
    }
    return (
        <div className="modal">
            <div className="modalContainer">
                <div  onClick={() => {noScroll();activeModal();activeModalContainer();}} className="closeBtn">
                    <span className="iconClose"></span>
                </div>
                { children }
            </div>
        </div>
    )
}
