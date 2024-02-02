function UserComponent(props) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

export default UserComponent;
