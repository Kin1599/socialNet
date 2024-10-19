
import React from 'react'
import cl from './SuggestionsWidget.module.scss'
import SuggestionItem from '../../shared/modules/SuggestionItem/SuggestionItem'

function SuggestionsWidget({suggestionItems}) {
  return (
    <div className={cl.suggestionsWidget}>
        <div className={cl.suggestionsWidget__title}>You might like</div>
        <div className={cl.suggestionsWidget__items}>
        {
            suggestionItems && suggestionItems.map((user, id) => (
                <SuggestionItem user={user} key={id}/>
            ))
        }
        </div>
        <div className={cl.suggestionsWidget__moreBtn}>Show more</div>
    </div>
  )
}

export default SuggestionsWidget