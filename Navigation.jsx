export default function Navigation({onClick}){
  return (
    <div className="navigation">
      <nav className="buttonBar">
        <button onClick={()=>onClick()}>다크컨텍스트용</button>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </nav>
    </div>
  )
}