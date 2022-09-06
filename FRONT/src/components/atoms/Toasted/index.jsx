import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toasted() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button type="submit" onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default Toasted;