import React from 'react'
import faker from 'faker'


import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  
    return(
      <div className="ui container comments">
        <ApprovalCard> 
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            content="Good job!"
            avatar={faker.image.avatar()}
          />
        </ ApprovalCard>
        
        <ApprovalCard>
          <CommentDetail
            author="Alexx"
            timeAgo="Today at 4:30PM"
            content="Nice blog!"
            avatar={faker.image.avatar()}
          />
        </ ApprovalCard>
      

        <ApprovalCard>
          <CommentDetail
            author="Lexxi"
            timeAgo="Today at 2:48PM"
            content="Nice photo!"
            avatar={faker.image.avatar()}
          />  
        </ApprovalCard>
        

      </div>
    )
}

export default App