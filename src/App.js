

function App() {
  return (
    <div>
      <h1 className="text-4xl 
      font-bold underline
      font-roboto
      ">Wellcome</h1>
      <h2 className="
      mt-4 text-blue-600 text-xl pl-2 
      ml-2 border-l-4
      border-red-500
      rounded font-serif-times
      ">Hello Tailwind</h2>

      <div className="
      flex">
      <button className="
      ml-10 mt-4
      border-2 p-1 pl-2 pr-2
      bg-gradient-to-br
      from-green-400
      via-green-200
      to-lime-300
      rounded-lg 
      font-medium
      shadow-xl
      hover:bg-violet-300
      ">Cancel</button>
      
     
      <button className="
      ml-10 mt-4
      border-2 p-1 pl-2 pr-2
      bg-gradient-to-br
      from-rose-400
      via-rose-200
      to-lime-300
      rounded-lg 
      font-medium
      shadow-xl
      hover:bg-violet-200
      ">Confirm</button>
      </div>
    </div>
  );
}

export default App;
