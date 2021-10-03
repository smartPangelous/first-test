import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation /> // the header nav bar goes here ( you can also delete it )
      <main className={classes.main}>{props.children}</main> // all the tags an other components goes here since we use Layout tag as a wrapping tag, this means that all other content between open/close tags of Layout will be found as props.children. 
    </div>
  );
}

export default Layout;
