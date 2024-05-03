const Home = () => {
    return ( 
        
    <div className="mx-60 pt-24 mb-24 ">
        <div className="h-96 w-2/3">
          <div className="size-17">
            <img className="inline-block w-24 px-7" src="/images/header/star.png" alt="star" />
            <img className="inline-block w-24 px-7" src="/images/header/star.png" alt="star" />
            <img className="inline-block w-24 px-7" src="/images/header/star.png" alt="star" />
            <img className="inline-block w-24 px-7" src="/images/header/star.png" alt="star" />
          </div>
          <h1 className="text-white text-8xl pt-20 font-bold">Отель «Долина 960»</h1>
          <button className="mt-20 bg-purple-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Быстрое Бронирование
          </button>          
        </div>     
        <div className="pt-28 mt-50 ">
            <h1 className="text-white text-5xl pb-10 ">Лучшие предложения</h1>
            <div className="bg-slate-400/50  rounded-md inline-block">  
              <div className="inline-block p-7">
              <img className="w-32 h-40"  src="/images/home/1.png" alt="star" />
              </div>                          
              <div className="inline-block p-7">
              <h3 className="text-white text-3xl pb-9 ">Премиум кинг</h3>
              <h3 className="text-white text-3xl pb-9">Р 4 000</h3>
              <button className="bg-purple-950 hover:bg-blue-700 text-white font-bold mb-4 py-2 px-4 pb-1 rounded">
            Быстрое Бронирование
              </button> 
              </div>
              
            </div>
            <div className="bg-slate-400/50  rounded-md inline-block ml-5">              
              <img className="inline-block w-32 p-7" src="/images/home/2.png" alt="star" />
            </div>
            <div className="bg-slate-400/50  rounded-md inline-block ml-5">              
              <img className="inline-block w-32 p-7" src="/images/home/3.png" alt="star" />
            </div>
        </div>                                      
    </div>
      

    );
}
 
export default Home;