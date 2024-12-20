import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import  './index.scss';

const Layout = () =>{
    return (
        <div className="App">
     <Sidebar/>
     <div className='page'>
        <span className='tags top-tags'>&alt;body&gt; </span>
        <Outlet />

        <span className="tags bottom-tags">&alt;body&gt;</span>
        <br />
        <span className='bottom-tag-html'></span>
     </div>
      </div>
    )
}

export default Layout;