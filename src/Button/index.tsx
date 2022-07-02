const Button = (props) => {
  return (
    <button class="bg-emerald-700 text-white p-2 px-4 rounded active:bg-emerald-900">{props.children}</button>
  )
}

export default Button