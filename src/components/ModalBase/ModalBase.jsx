

export default function ModalBase({children, setOpenModal}) {
    return (
        <div className="modal">
            <span children="modalBackground"></span>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {setOpenModal(false);}}><span className="iconClose">Close Modal</span></button>
                </div>
                { children }
            </div>
        </div>
    )
}
