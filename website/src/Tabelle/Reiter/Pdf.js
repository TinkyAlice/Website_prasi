import React from 'react'
import Wasserbuch_1 from '../../Bilder/Wasserbuch-1.png';
import Wasserbuch_2 from '../../Bilder/Wasserbuch-2.png';
import Wasserbuch_3 from '../../Bilder/Wasserbuch-3.png';
import Wasserbuch_4 from '../../Bilder/Wasserbuch-4.png';
import Wasserbuch_5 from '../../Bilder/Wasserbuch-5.png';

const Pdf = () => {
    return (
        <div>
            <img src={Wasserbuch_1} class=" fill-current border-2 border-slate-800" />
            <img src={Wasserbuch_2} class=" fill-current border-2 border-slate-800" />
            <img src={Wasserbuch_3} class=" fill-current border-2 border-slate-800" />
            <img src={Wasserbuch_4} class=" fill-current border-2 border-slate-800" />
            <img src={Wasserbuch_5} class=" fill-current border-2 border-slate-800" />
        </div>
    )
}

export default Pdf