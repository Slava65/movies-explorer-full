function NavTab() {
    return (
      <div className='navtab'>
        <nav className='navtab__menu'>
        <button
              type="button"
              className="navtab__button"
              aria-label="О проекте"
            >
              О проекте
            </button>
            <button
              type="button"
              className="navtab__button"
              aria-label="Технологии"
            >
              Технологии
            </button>
            <button
              type="button"
              className="navtab__button"
              aria-label="Студент"
            >
              Студент
            </button>
        </nav>
      </div>
    );
  }
  
  export default NavTab;