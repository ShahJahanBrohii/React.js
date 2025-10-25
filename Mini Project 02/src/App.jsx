import React from 'react'
import PageOne from './components/Page01/PageOne'
import PageTwo from './components/Page02/PageTwo'
const App = () => {

  const  userDetils = [
       {
        img: "https://plus.unsplash.com/premium_photo-1760876476171-23c6ddefd8f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1200",
        intro: "I am Shah Jahan and ma hocky ka bht bra player ho meri aik tang nakli ha and ma cricket aur football b khel skta ho "
       },
       {
        img: "https://plus.unsplash.com/premium_photo-1760876476171-23c6ddefd8f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1200",
        intro: "I am Shah Nawaz and ma Cricket ka bht bra player ho meri aik tang nakli ha and ma cricket aur football b khel skta ho "
       },
       {
        img: "https://plus.unsplash.com/premium_photo-1760876476171-23c6ddefd8f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1200",
        intro: "I am Abbas and ma hocky ka bht bra player ho meri aik tang nakli ha and ma cricket aur football b khel skta ho "
       }

    ]

  return (
    <div className='h-screen w-full' >

    <PageOne details = {userDetils}/>
    <PageTwo/>

    </div>
  )
}

export default App
