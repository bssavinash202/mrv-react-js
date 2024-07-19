import React from 'react'
function Page() {
    return (
        <div>
           <nav className='container'>
            <div className='logo'>
                <a href='https://www.nike.com/in/'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudBGHxJ1nIIhJ-vKoSkYc-pF_QIRy47rihQ&s" alt='logo'></img>
                </a>
            </div>
            <ul>
                <a href='https://www.nike.com/in/' className='ul'><li >Home</li></a>
                
                <a href='https://www.nike.com/in/w' className='ul'><li >Products</li></a>
                
                <a href='https://about.nike.com/en' className='ul'><li >About</li></a>
                
                <a href='https://www.nike.com/in/help/#contact' className='ul'><li >Contact US</li></a>
            </ul>
            <a href='https://accounts.nike.com/lookup?client_id=4fd2d5e7db76e0f85a6bb56721bd51df&redirect_uri=https://www.nike.com/auth/login&response_type=code&scope=openid%20nike.digital%20profile%20email%20phone%20flow%20country&state=46a20c4d3226497dad99aa526f0a55e2&code_challenge=EiX_XRc28IYw1yUpdZSHPl-LxxlKiNJDEdgHP_q7TWE&code_challenge_method=S256'><button>Login</button></a>
           </nav>
        </div>
    );
}

export default Page;
