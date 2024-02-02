import FollowBtn from "./components/followBtn/FollowBtn";

function UserComponent(props) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
      <FollowBtn />
    </div>
  );
}

export default UserComponent;
