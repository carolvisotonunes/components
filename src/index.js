import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
    <div className="ui container comments">
    <ApprovalCard>
     <div>
      <h4> Warning!</h4>
       Are you sure you want this?
     </div>
    </ApprovalCard>
      <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:00am"
            text ="Nice one"
            avatar={faker.image.avatar()}
           />
      </ApprovalCard>
      <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 6:00am"
            text = "cool"
            avatar={faker.image.avatar()}
          />
       </ApprovalCard>
       <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="yesterday at 8:00am"
            text = "great"
            avatar={faker.image.avatar()}
      />
       </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));