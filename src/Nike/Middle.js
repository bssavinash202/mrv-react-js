import React from 'react'

function Middle() {
    return (
        <main>
        <div className='hero'>
            <div className='heading'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className='desc'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>   
            <div className='firstbtn'>
                <a href='https://www.nike.com/gb/t/revolution-7-older-running-shoes-V80jq4/FB7689-401'>
                    <button>Shop Now</button>
                </a>
               <a href='https://www.nike.com/in/w/mens-shoes-nik1zy7ok'>
                    <button className='secondbtn'>Category</button>
               </a>
            </div>   
            <div className='shopping'>
                <p className='pr'>Also Avaible On</p>
                <div className='ecom'>
                    <a href='https://www.amazon.in/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=nike+shoes' className='icons'>
                        <img src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg' alt='amazon logo'></img>
                    </a>
                    <a href='https://www.flipkart.com/mens-footwear/pr?sid=osp%2Ccil&otracker=nmenu_sub_Men_0_Footwear&p%5B%5D=facets.brand%255B%255D%3DNIKE' className='icons'>
                         <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5f3d81106163451.5f897528aa41a.jpg' alt='Flipkart logo'></img>
                    </a>
                </div>
            </div>
        </div>
         <div className='image'>
            <a href='https://www.nike.com/gb/t/revolution-7-older-running-shoes-V80jq4/FB7689-401'>
         <img src='https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg' alt='shoe'></img>
         </a>
         </div>
         </main>
    );
}

export default Middle;
