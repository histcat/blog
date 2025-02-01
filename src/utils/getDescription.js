export function getDescription(post, len) 
{
    if(post.data.description)
    {
        return post.data.description;
    }
    const bodyText = post.body.replace(/[^a-zA-Z0-9\u4e00-\u9fa5 ]/g, '').replace(/!\[.*?\]\(.*?\)/g, '');
    return bodyText.substring(0, len);
}