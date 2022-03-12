import {ProfileImage} from './ProfileImage';
import {User} from './User';
import {TimeStamp} from './TimeStamp';
import {Message} from './Message';
import {Actions} from './Actions';

function Tweet(props) {
  const {user,timestamp,message} = props.tweet;
  return (
    <div className="tweet">
      <ProfileImage image={user.image}/>

      <div className="body">
        <div className="top">
          <User userData={user}/>
          <TimeStamp timestamp={timestamp}/>
        </div>

        <Message message={message}/>
        <Actions />
      </div>
    </div>
  );
}

export default Tweet;
