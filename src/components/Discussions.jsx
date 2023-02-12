import { Discussion } from "./Discussion"
export const Discussions = ({discussions}) => {
    return(
        <section className="discussion__wrapper">
        <ul className="discussions__container">
          {discussions.map(discussion => {
            return <Discussion discussion={discussion} key={discussion.id}></Discussion>
          })}
        </ul>
      </section>
    )
}