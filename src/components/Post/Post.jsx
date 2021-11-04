
export default function Post({ contPost }) {
    
    return (
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
                        <span className="name">{contPost.authorName}</span>
                    </div>
                </div>
                <div className="contTitle">
                    <h2>{contPost.postText}</h2>
                </div>
                <div className="contLiks">
                    <span>Likes: <span>{contPost.postLikes}</span></span>
                </div>
                <div className="contComments">
                    <span>Comentarios: <span>{contPost.postComments}</span></span>
                    <button>Ver comentarios</button>
                </div>
                <div className="contTags">
                    {contPost.postTags.map((item) => <span className="tag">{item}</span>)}
                </div>
            </div>
        </div>
    )
}