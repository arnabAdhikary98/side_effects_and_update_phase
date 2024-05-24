function Post({id, title, body }) {
  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
      <p>id: {id}</p>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  );
}

export default Post;
