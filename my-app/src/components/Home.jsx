import NavBar from './NavBar';
import ViewBlogs from './ViewBlogs';

const Home = () => {
    return(
      <>
        <NavBar />
        <div className='blogs-container'>
          <ViewBlogs />
        </div>
      </>
    );
};

export default Home;