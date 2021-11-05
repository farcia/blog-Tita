
export default function DummyTransformData(dataColection) {
    const data = {
        id: dataColection.id,
        img: dataColection.image,
        postText: dataColection.text,
        postLikes: dataColection.likes,
        postComments: 0,
        postTags: dataColection.tags,
        authorAvatar: dataColection.owner.picture,
        authorName: dataColection.owner.firstName + ' ' + dataColection.owner.lastName
    }


    return data;
}
