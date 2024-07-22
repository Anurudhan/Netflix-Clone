import bodyImg from '../../../public/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg'
import SavedShows from '../SavedShows'

function Account() {
  return (
    <>
    <div className="w-full text-white ">
    <img
          className='w-full h-[400px] object-cover '
          src={bodyImg}
          alt='/'
        />
      <div className='bg-black/60  fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My shows</h1>
      </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account