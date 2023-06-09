import Wrapper from '../assets/wrappers/SmallSidebar'
import { useSelector, useDispatch } from 'react-redux';
import {FaTimes} from '../assets/icons/react-icons'
import Logo from './Logo'
import { toggleSidebar } from '../features/user/userSlice';
import NavLinks from './NavLinks';

const SmallSidebar = () => {

  const {isSidebarOpen} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (

    <Wrapper>

     <div className={isSidebarOpen ? "sidebar-container show-sidebar" :"sidebar-container"}>

      <div className="content">

        <button className="close-btn" onClick={() => dispatch(toggleSidebar())}>
          
          <FaTimes/>
          
          </button>

        <header>

          <Logo />

        </header>

        <NavLinks/>

      </div>
     </div>

    </Wrapper>
  )
}
export default SmallSidebar