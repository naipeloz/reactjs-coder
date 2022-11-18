const Modal = ({ children, title }) => {
  return (
    <div style={{ background: 'lightgray', border: '1px solid black', margin: 15}}>
      <h1>{title}</h1>
      <div>
        {children}
        <div>
          Botones
        </div>
      </div>
    </div>
  )
}

export default Modal;
