import Dropdown from "react-bootstrap/Dropdown";

function BasicDropdown(props) {
  const { title, values } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {values?.map((val) => (
          <Dropdown.Item href="#/action-1">{val}</Dropdown.Item>
        ))}

        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicDropdown;
