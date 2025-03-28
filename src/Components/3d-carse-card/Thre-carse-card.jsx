import React, { useEffect, useRef } from 'react';

const ThredCarseCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadSpline = async () => {
      const { Application } = await import('@splinetool/runtime');
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/nNthtPmaCbO62jKp/scene.splinecode');
    };

    loadSpline();
  }, []);

  const handleCanvasClick = () => {
    const rotateButton = document.getElementById('rotate');
    rotateButton.classList.toggle('bg-indigo-600');
    rotateButton.classList.toggle('bg-lime-500');
  };

  return (
    <div className="w-full h-full">
      <header className="block fixed inset-x-0 z-50 p-5 md:p-10 flex items-start justify-between gap-10">
        <div className="pl-5 md:pr-10 flex items-center text-[#5046A6]">
          <svg width="60" height="60" viewBox="0 0 60 20.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="m60 0-43.9 18.6c-3.7 1.5-6.7 2.3-9.2 2.3-2.8 0-4.8-1-6.1-2.9-1.6-2.5-.9-6.6 1.9-10.9 1.6-2.5 3.7-4.8 5.8-7-.5.7-4.7 7.8-.1 11.1.9.7 2.2 1 3.8 1 1.3 0 2.8-.2 4.4-.6z" />
          </svg>
        </div>

        <div className="px-6 md:px-10 py-4 md:py-6 flex items-center justify-between gap-10 bg-white/70 backdrop-blur-sm rounded-md sm:w-full lg:w-2/3 leading-none text-[#5046A6]">
          <ul className="hidden sm:flex items-center gap-6 md:gap-8">
            <li>
              <a href="#" className="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Shop</a>
            </li>
            <li>
              <a href="#" className="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Outlet</a>
            </li>
            <li>
              <a href="#" className="block relative after:block after:absolute after:-bottom-[5px] after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left">Explore</a>
            </li>
          </ul>
          <ul className="flex items-center gap-6 md:gap-8">
            <li>
              <button type="button" aria-label="Search" className="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM4 11.5a7.5 7.5 0 1 1 13.145 4.938l4.209 4.208-.708.708-4.208-4.209A7.5 7.5 0 0 1 4 11.5Z" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" aria-label="Cart" className="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.525 3.525A3.5 3.5 0 0 1 15.5 6v1.5H21V17a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7.5h5.5V6a3.5 3.5 0 0 1 1.025-2.475ZM8.5 8.5v3h1v-3h5v3h1v-3H20V17a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8.5h4.5Zm6-1h-5V6a2.5 2.5 0 0 1 5 0v1.5Z" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" aria-label="Account" className="p-3 -m-3 rounded-full transition-colors hover:bg-violet-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm0 7.5A3.5 3.5 0 0 0 4 18.5V21H3v-2.5A4.5 4.5 0 0 1 7.5 14h9a4.5 4.5 0 0 1 4.5 4.5V21h-1v-2.5a3.5 3.5 0 0 0-3.5-3.5h-9Z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>

      <div className="absolute inset-0 z-0 group cursor-pointer bg-violet-50">
        <canvas id="canvas3d" ref={canvasRef} className="block w-full h-full relative z-10" onClick={handleCanvasClick}></canvas>

        <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
          <svg className="animate-spin h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
              <circle className="opacity-20" cx="12" cy="12" r="11" />
              <path d="m23 12c0 6.1-4.9 11-11 11" />
            </g>
          </svg>
        </div>

        <button type="button" id="rotate" className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 bg-indigo-600 rounded-full pointer-events-none group-hover:scale-110 transition">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
            <path d="m23.7 23.7c4.3-4.3 10.2-6.8 16.3-6.8s12 2.4 16.3 6.8c3.2 3.2 5.4 7.3 6.3 11.7l3.8-5.1 2.8 2-7.4 10.1-10.1-7.4 2-2.8 5.6 4.1c-.7-3.4-2.2-6.6-4.5-9.3-3.1-3.6-7.5-5.9-12.2-6.5s-9.5.5-13.5 3.1-6.8 6.6-8.1 11.3c-1.2 4.6-.7 9.5 1.4 13.8s5.7 7.6 10.1 9.5c4.4 1.8 9.3 2 13.8.4s8.3-4.6 10.7-8.8l3 1.7c-2 3.5-5 6.5-8.5 8.5s-7.5 3.1-11.5 3.1c-6.1 0-12-2.4-16.3-6.8-4.3-4.3-6.8-10.2-6.8-16.3s2.5-12 6.8-16.3z" fill="#fff" />
          </svg>

          <span className="block absolute left-full top-1/2 -translate-y-1/2 whitespace-nowrap ml-4 opacity-0 group-hover:opacity-100 transition-opacity">Toggle view</span>
        </button>
      </div>

      <aside className="hidden lg:block fixed right-0 bottom-0 z-50 px-10 pb-[72px] w-[38%] max-w-[500px]">
        <div className="px-10 pt-10 rounded-md bg-white/70 backdrop-blur-sm">
          <h1 className="text-3xl text-[#5046A6]">Nike Pegasus 33</h1>
          <h2 className='text-[#5046A6]'>Men's Road Running Shoes</h2>
          <p className="mt-3 text-[#5046A6]">$130</p>
          <a href="" target="_blank" rel="noopener" className="block w-full p-5 bg-black text-white text-center rounded-full translate-y-1/2">
            More information
          </a>
        </div>
      </aside>
    </div>
  );
};

export default ThredCarseCard;