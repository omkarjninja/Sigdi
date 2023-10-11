import Image from "./image";
import { useState } from "react";
import "./image-collection.css"
function Collection(){
    const [isActive, setActive] = useState(false);
    const happens = () => {
        setActive(!isActive);
      };

    // function myFunction() {
    //     var element = document.getElementById("myDIV");
    //     element.classList.toggle("mystyle");
    //  }
    //  const store=document.getElementsByid("close");
    // const happens=(event)=>{
    //     event.currentTarget.classList.toggle('close');
    // }
    const val=[
        {
            class:"container-image one"
        },
        {
            class:"container-image two"
        },
        {
            class:"container-image three"
        },
        {
            class:"container-image four"
        },
        {
            class:"container-image five"
        },
        {
            class:"container-image six"
        },
        {
            class:"container-image seven"
        },
        {
            class:"container-image eight"
        },
        {
            class:"container-image nine"
        },
        {
            class:"container-image ten"
        },
        {
            class:"container-image aa"
        },
        {
            class:"container-image bb"
        },
        {
            class:"container-image cc"
        },
        {
            class:"container-image dd"
        },
        {
            class:"container-image ee"
        },
        {
            class:"container-image ff"
        },
    ]
    return(
        <div>
            <div id="image-collectionfix" >
                <Image class={val[0].class}></Image>
                <Image class={val[1].class}></Image>
                <Image class={val[2].class}></Image>
            </div>
            <div id="image-collection" className={isActive ? 'openner': 'close'} >
                <Image class={val[3].class}></Image>
                <Image class={val[4].class}></Image>
                <Image class={val[5].class}></Image>
            </div>
            <div id="image-collection" className={isActive ? 'openner': 'close'} >
                <Image class={val[6].class}></Image>
                <Image class={val[7].class}></Image>
                <Image class={val[8].class}></Image>
            </div>
            <div id="image-collection" className={isActive ? 'openner': 'close'} >
                <Image class={val[9].class}></Image>
                <Image class={val[10].class}></Image>
                <Image class={val[11].class}></Image>
            </div>
            <div id="image-collection" className={isActive ? 'openner': 'close'} >
                <Image class={val[12].class}></Image>
                <Image class={val[13].class}></Image>
                <Image class={val[14].class}></Image>
            </div>
            <button className="btn-toggle" onClick={happens}>{isActive ? 'Click to Shrink': 'Click to Expand'}</button>
        </div>
    )
}
export default Collection;