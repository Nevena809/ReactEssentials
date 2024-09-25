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

function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
