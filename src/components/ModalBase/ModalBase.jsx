

export default function ModalBase({children, setOpenModal}) {
    return (
        <div className="modal">
            <span children="modalBackground"></span>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {setOpenModal(false);}}><span children="iconClose"></span></button>
                </div>
                { children }
            </div>
        </div>
    )
}
