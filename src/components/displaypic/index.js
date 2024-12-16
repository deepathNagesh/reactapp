import React, { useEffect, useState } from 'react'
import Goat from '../../img/got.png'; 
import Lion from '../../img/lion.jpg'; 
import Cat from '../../img/cat.jpg';
import { useSelector } from 'react-redux';
function Index() {

    const [img,setImg] = useState(Lion);
    const displayList = useSelector((state) => state.actorAdd.selRadio);

    // console.log(displayList);

    useEffect(() => {
        if(displayList==='Goat'){
          setImg(Goat);
      }else if (displayList==='Lion'){
          setImg(Lion);
      }else if (displayList==='Zebra'){
          setImg(Cat);
      }
    },[displayList])
 

  return (
    <img height={600} width={600} src={img} alt="Logo" />
  )
}

export default Index
