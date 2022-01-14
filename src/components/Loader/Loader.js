import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoaderSpinner from 'react-loader-spinner';
const centeredLoader = {
  textAlign: 'center',
};

const Loader = () => (
  <div style={{ ...centeredLoader }}>
    <LoaderSpinner
      type="TailSpin"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
);

export default Loader;
