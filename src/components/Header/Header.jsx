import { HeaderContainer, HeaderNav1, HeaderNav2 } from './style.jsx'

import { IoMdSearch                              } from "react-icons/io";
import { IoPersonSharp                           } from "react-icons/io5";
import { FaHome, FaTrophy, FaFlag, FaTshirt      } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight              } from "react-icons/md";

function Header() {
    return (<>
        <HeaderContainer>
            <div className="main_header">
                    <div className="logo">
                        <h1>Ro<span>Transfer</span></h1>
                    </div>
                    <div className="search flex">
                        <input type="text" placeholder='Procurar qualquer coisa...' />
                        <IoMdSearch />
                    </div>
            </div>
            <HeaderNav1>
                    <div className="links">
                        <a href="#">Notícias</a>
                        <a href="#">Transferências & rumores</a>
                        <a href="#">Valores de mercado</a>
                        <a href="#">Competições</a>
                        <a href="#">Fóruns</a>
                        <a href="#">Meu time</a>
                        <a href="#">Ao vivo</a>
                    </div>
                    <div className="account">
                        <button>
                            <IoPersonSharp />
                            Log-in
                        </button>
                    </div>
            </HeaderNav1>
            <HeaderNav2>
                    <div className="home">
                        <button className='flex'><FaHome /></button>
                    </div>
                    <div className="links">
                        <button className="container">
                            <div className="icon1 flex">
                                <div className="container flex"><FaFlag /></div>
                            </div>
                            <span className='flex'>Brasil</span>
                            <div className="icon2 flex"><MdKeyboardDoubleArrowRight /></div>
                        </button>
                        <button className="container">
                            <div className="icon1 flex">
                                <div className="container flex"><FaTrophy /></div>
                            </div>
                            <span className='flex'>Competição</span>
                            <div className="icon2 flex"><MdKeyboardDoubleArrowRight /></div>
                        </button>
                        <button className="container">
                            <div className="icon1 flex">
                                <div className="container flex"><FaTshirt  /></div>
                            </div>
                            <span className='flex'>Clube</span>
                            <div className="icon2 flex"><MdKeyboardDoubleArrowRight /></div>
                        </button>
                        <button className="container">
                            <div className="icon1 flex">
                                <div className="container flex"><IoPersonSharp /></div>
                            </div>
                            <span className='flex'>Jogadores</span>
                            <div className="icon2 flex"><MdKeyboardDoubleArrowRight /></div>
                        </button>
                    </div>
            </HeaderNav2>
        </HeaderContainer>
    </>);
}

export default Header;