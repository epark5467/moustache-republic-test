
import './App.css';
import NavHeader from './Components/NavHeader';
import { useState } from 'React';
import Main from './Components/Main';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';

function App() {
  const [cartItem, setCartItem] = useState([
    {title: "Classic Tee", quantity: "1", price: "75.00", size: "S" },
    {title: "Classic Tee", quantity: "3", price: "75.00", size: "L" }
]);

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
        defaultMatches: true
    });
  const styles = appStyles();
  return (
    <div className={isMobile ? styles.contentsMobile : styles.contents}>
      <NavHeader  cartItem={cartItem} setCartItem={setCartItem} />
      <Main cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
}

export default App;



const appStyles = makeStyles((theme) => ({
    contents: {
      marginLeft: theme.spacing(25),
      marginRight: theme.spacing(25),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    contentsMobile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}));