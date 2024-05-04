export default function CommentForm() {
  return (
    <form>
      <h3>Add a comment</h3>
      <input name="name" placeholder="Name" />
      <input name="comment" type="text" placeholder="Comment" />
      <button>Submit</button>
    </form>
  );
}
