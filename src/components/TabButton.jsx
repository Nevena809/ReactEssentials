// function TabButton(props) {
//   return (
//     <li>
//       <button
//         className={props.isSelected ? "active" : undefined}
//         onClick={props.onSelect}
//       >
//         {props.children}
//       </button>
//     </li>
//   );
// }

// export default TabButton;

function TabButton({ children, isSelected, onSelect }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
