export const Discussion = ({discussion}) => {
    const {url, author, avatarUrl, title, createdAt, answer} = discussion;

    const discussionDelete = (e) => {
        e.preventDefault();
        console.log('디스커션 서브밋 함수 실행');
             
      };


    return (
      <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
      <img className="discussion__avatar--image" src={avatarUrl} alt={`avatar of ${author}`} />
      </div>
    <div className="discussion__content">
    <h2 className="discussion__title"><a href={url}>{title}</a></h2>
    <div className="discussion__information">{`${author} / ${new Date(createdAt).toLocaleString()}`}</div>
    </div>
    <div className="discussion__answered">
      <p className="discussion__isAnswered">{answer ? "✔️" : "❌" }</p>
      <button type="button" value="button" id="delete" className="discussion__deleltebtn" onClick={discussionDelete}>삭제</button>
    </div>
  </li>
    )}