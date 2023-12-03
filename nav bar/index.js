import "./index.css"
 
function Header(){
    return(
        <header>
      <a className="logo">le jardin etoilé</a>
      <div class="toggle-btn"><i class="fa-solid fa-bars fa-2xl burger"></i><i class="fa-solid fa-xmark fa-2xl crossBurger"></i></div>
      <ul className="navbar">
         <li><a href="#" >Acceuil</a></li>
         <li><a href="#menu">Menu</a></li> 
         <li><a href="#nosexperts" >Expert</a></li>
        <li><a href="#specialite" >Nos specialité</a></li>
        <li><a href="#footer">Contact</a></li>
 
        <li><a className="btn-reserv">reservation</a></li>
      </ul>
    </header>
    )
}
export default Header; 