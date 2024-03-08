
    // {/* <div className='w-full h-96 lg:h-screen before:bg-gradient-to-b before:from-[#0000006d] before:via-[#0000003c] before:to-black before:w-full before:h-full before:absolute relative overflow-hidden'>  */}
const jumbotron = () => {


  return (
    <div className='w-full h-[50vh] relative overflow-hidden'> 
      <div class="absolute inset-0 bg-gradient-to-b from-[#00000067] to-black opacity-50"></div>
      <img src='https://gigaofficial.id/aset/img/bg.jpg' className='w-full h-full object-cover'/>
      
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <img src="https://gigaofficial.id/aset/head3.png" className="object-cover w-80 md:w-4/12"/>
      </div>
    </div>


  )
}

export default jumbotron