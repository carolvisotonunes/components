import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
    <div className="ui container comments">
      <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:00am"
            text ="Nice one"
            avatar={faker.image.avatar()}
           />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 6:00am"
        text = "cool"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="yesterday at 8:00am"
        text = "great"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));