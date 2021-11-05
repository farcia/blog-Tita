import AuthorList from "../Author/AuthorList"

function ModalAuthor({ authorId }) {
    return (
        <div className="contComments">
            <AuthorList authorId={authorId} />
        </div>
    )
}

export default ModalAuthor
