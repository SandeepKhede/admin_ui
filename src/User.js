import { React, useState } from "react";
const User = ({ userData, setQuery, handleDelete, setData ,data }) => {
  const [isChecked, setIsChecked] = useState([]);
  // const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    // console.log(e);
    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
      
    }
  };
console.log(data);
  const alldelete = () => {
    // console.log(isChecked);
    const idArray = isChecked.map((e) => e);
    let data1 = data.filter((item) => {
      return !idArray.includes(item.id);
    });
    setData(data1);
    // setIsChecked([]);
    console.log(idArray);
  };
  return (
    <div>
      <button onClick={alldelete}>delete</button>
      {/* onClick={() => setChecked((c) => !c)} */}
      <input
        type="text"
        placeholder="seach here"
        onChange={(e) => setQuery(e.target.value)}
      />
      <table>
        <tr>
          <th></th>
          <th>Index</th>
          <th>Name</th>
          <th>Email</th>
          <th>role</th>
          <th>actions</th>
        </tr>
        {userData.map((val, key) => {
          return (
            <tr key={key}>
              <input
                type="checkbox"
                value={val.id}
                checked={val.isChecked}
                onChange={(e) => handleCheckbox(e)}
              />
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.role}</td>
              <td>
                <button>edit</button>
                <button onClick={(e) => handleDelete(key, e)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default User;
