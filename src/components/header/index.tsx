//import logosidia from '../../assets/sidia-logo-white.png';
//import { AuthContext } from '../../helpers/contexts/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
// import { LoginApi } from '../../services/api';
// import { UserData } from '../../@types/types';
//import logoutLogo from '../../assets/fluigicon-logout.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    //const { setSavePhoto, savePhoto, openLogout, setOpenLogout, CloseMockup } = useContext(AuthContext);
    //const [user, setUser] = useState({} as UserData);   
    const navigate = useNavigate();
    const [openLogout, setOpenLogout] = useState(false);
    
    const encoded = sessionStorage.getItem('token') || localStorage.getItem('token');
    
    // useEffect(() => {
    //     async function DataJson() { 
    //         const response = await LoginApi.get('/myself?expand=groups', {
    //             headers: {
    //                 "Authorization": "Basic " + encoded,
    //             }
    //         });
    //         const data = await response.data;
    //         setUser(data)
    //         await setSavePhoto(data.avatarUrls['48x48'])
    //     }
    //     DataJson()
    // }, [LoginApi])

    function handleLogout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/approach-generator/login');
        setOpenLogout(false);
    }

    function OpenMockup(event: React.MouseEvent) {
        event.stopPropagation();

        if(openLogout) {
            setOpenLogout(false)
        } else {
            setOpenLogout(true)
        }
    }
                    
    return (
        <>
        <header className="sticky top-0 z-10 h-[70px] bg-[#1C1F2A] font-fontPopping">
            <div className="flex justify-between">
                <img src="" alt="logosidia" className="text-white mt-3 ml-12 h-12 w-24" />
                <img src="" alt="savefotos" className='h-12 rounded-full mr-12 mt-3 cursor-pointer' onClick={OpenMockup}/>  
            </div>
            <div className={`${openLogout ? 'flex translate-y-4' : 'hidden'} transition ease-in-out duration-500 justify-end items-end`}>
                <div onClick={(event: React.MouseEvent) => (event.stopPropagation())} className={`flex justify-center items-center h-20 w-72 bg-green-600 mr-16 rounded-md`}>
                    <img src="" alt="" className='h-10 w-10 mr-3 rounded-3xl' />
                    <span className='text-sm text-white'>valor</span>
                    <img src="" alt="" className='h-4 w-4 ml-3 cursor-pointer' onClick={handleLogout}/>
                </div>
            </div> 
        </header>
        </>
    )
}