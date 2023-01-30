import Dashboard from './Dashboard'
import Infomation from './Infomation'

function App() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 h-screen w-full overflow-auto sticky top-0'>
      <div className='hidden sm:block overflow-auto col-span-2'>
        <h1>
          <Dashboard />
        </h1>
      </div>

      <div className='bg-slate-800 grid grid-rows-3 grid-flow-col gap-4 overflow-auto'>
        <div className=''>
          <video className='mx-auto my-20' width="520" height="440" controls>
            <source src="movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='text-white text-justify mx-8'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            In aliquam sem fringilla ut. Diam donec adipiscing tristique risus. Aliquam sem et tortor consequat. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.
            Nulla facilisi cras fermentum odio eu feugiat pretium nibh. Leo integer malesuada nunc vel risus.
            Egestas tellus rutrum tellus pellentesque eu. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
            Pretium viverra suspendisse potenti nullam ac tortor vitae. Ac orci phasellus egestas tellus rutrum.
            Urna porttitor rhoncus dolor purus non enim praesent elementum. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.
            Bibendum ut tristique et egestas quis ipsum suspendisse. Nisl suscipit adipiscing bibendum est ultricies integer.
            Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis.
            Ornare suspendisse sed nisi lacus sed viverra tellus in.
            Et tortor consequat id porta nibh venenatis cras sed felis.
            Nisl pretium fusce id velit ut tortor pretium. Venenatis cras sed felis eget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
