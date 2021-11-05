import CommentList from "../Comment/CommentList"

function ModalComments({ postId }) {
    return (
        <div className="contComments">
            <CommentList postId={postId} />
        </div>
    )
}

export default ModalComments
