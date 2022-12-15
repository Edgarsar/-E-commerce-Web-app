import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import CardIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../components/contexts/user.context';
import { CartContext } from '../../components/contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);



  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ?
              (
                <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink>
              ) :
              (
                <NavLink to='/auth'>
                  Sign In
                </NavLink>
              )
          }
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}


export default Navigation;