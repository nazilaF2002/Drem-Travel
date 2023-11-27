import HandleLanguageChange from "./hundelLanguage";
import Parent from "./parent";
import './selectOption.css'
export default function SelectOption(){
    return(
        <Parent className="language-select">
               <label>Select Language : </label>
                <select className="language-dropdown" onChange={(e)=>{HandleLanguageChange(e)}}>
                   <option key="en" value="en">English</option>
                   <option key="esp" value="es">Español</option>
                   <option key="tr" value="tr">Turkish</option>
                   <option key="dr" value="dr">Dari</option>
                </select>
            </Parent>
    );
} 