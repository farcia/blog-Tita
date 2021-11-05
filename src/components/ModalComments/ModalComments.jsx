import Comment from "../Comment"



function ModalComments({ postId }) {
    return (
        <div className="contComments">
            <Comment postId={postId} type={0} />
        </div>
    )
}

export default ModalComments
