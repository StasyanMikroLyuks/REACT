import {NavLink} from "react-router-dom"

const NavBar = () => {

   const activeLink = 'px-10 hover:text-black-600 text-red'; 
   const normalLink = 'px-10 hover:text-blue-600 text-green';

    return (    
        
            <header className="mx-60 py-6">
                     <div className="inline">
                  <img className="inline-block w-24" src="/images/header/logo.png" alt="logo1" />
                  <img className="inline-block w-24 pl-6" src="/images/header/logo2.png" alt="logo2" />
                </div>
                <div className="text-white inline pl-24">
                    <NavLink to="/" activeClassName={activeLink} className={normalLink}>Главная</NavLink>
                    <NavLink to="/rooms" activeClassName={activeLink} className={normalLink}>Номера</NavLink>
                    <NavLink to="/entertainments" className={({isActive}) => isActive ? activeLink : normalLink}>Развлечения</NavLink>
                    <NavLink to="/transfer" className={({isActive}) => isActive ? activeLink : normalLink}>Трансфер</NavLink>
                    <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Контакты</NavLink>        
                </div>
                <div className="inline">
                  <img className="inline-block w-16" src="/images/header/vk.png" alt="vk" />
                  <img className="inline-block w-16" src="/images/header/telegram.png" alt="telegram" />
                  <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                    Групповые заезды
                  </button>
                </div>
              </header> 
           
              
              );
}
 
export default NavBar;