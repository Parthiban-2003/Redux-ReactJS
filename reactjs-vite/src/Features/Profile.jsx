import { useDispatch, useSelector } from 'react-redux';

function Profile() {
  let Selectors = useSelector((item) => item.FromContent.value);
  let Colors = useSelector((item) => item.Themes.value.color);

  if(!Selectors.name)
  {
     return false;
  }

  return (
    <div style={{"color":Colors}}>
      <h1>Form Items</h1>
      <p>Name: {Selectors.name}</p>
      <p>Age: {Selectors.age}</p>
      <p>Email: {Selectors.email}</p>
    </div>
  );
}

export default Profile;
