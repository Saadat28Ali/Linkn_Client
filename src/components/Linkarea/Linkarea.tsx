// Component imports
import Link from "../Link/Link";

// Other imports
import { Linkinter } from "../Link/Link";
import { ThemesEnum } from "../../main";

const Linkarea = (
    {
        LinksArr, 
        theme
    }:
    {
        LinksArr: Array<Linkinter>, 
        theme: ThemesEnum
    }
) => {
    return (
        <div
        className="
        Linkarea

        w-max
        
        gap-1
        ">
            {LinksArr.map((link: Linkinter, index: number) => {
                return (
                    <Link data={link} key={index} theme={theme} />
                );
            })}
        </div>
    );
}

export default Linkarea;