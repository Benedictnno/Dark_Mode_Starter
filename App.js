import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function getStorageTheme() {
  let theme = "light-theme";
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem("theme");
  }return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  function toggle() {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  }

  useEffect(() =>{
   document.documentElement.className= theme
   localStorage.setItem('theme', theme)
  },[theme])
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggle}>
            toggle
          </button>
        </div>

        <section className="artcles">
          {data.map((item) => {
            return <Article key={item.id} {...item} />;
          })}
        </section>
      </nav>
    </main>
  );
}

export default App
