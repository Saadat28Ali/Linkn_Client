// React imports --------------------------------

import { useEffect, useState } from "react";

// Interface imports ----------------------------

import { Linkinter } from "../Link/Link";

// Enum imports ---------------------------------

// import { ThemesEnum } from "../../main";

// Script imports -------------------------------

// import { readTheme } from "../../scripts/theme";
import { popItemAtIndex, insertItemAtIndex } from "../../scripts/array/array";

// Component imports ----------------------------

import EditableLink from "../EditableLink/EditableLink";
// import HeadingText from "../HeadingText/HeadingText";
import DropArea from "../DropArea/DropArea";

// ----------------------------------------------

export default function EditableLinkArea(
    {
        linksArr, 
        setLinksArr, 
        OnChange
    }:
    {
        linksArr: Array<Linkinter>, 
        setLinksArr: Function, 
        OnChange: Function
    }

) {
    // console.log("Editable link area");
    // const themeInStorage: ThemesEnum | null = readTheme();
    // const [theme, ] = useState<ThemesEnum>((themeInStorage) ? themeInStorage : ThemesEnum.darkTheme);
    const [replacementData, setReplacementData] = useState<
    {
        moveLinkOnIndex: number, 
        moveLinkToIndex: number
    }>({moveLinkOnIndex: -1, moveLinkToIndex: -1});


    useEffect(() => {
        console.log("Replacement data changed");
        if (replacementData.moveLinkOnIndex !== -1 && replacementData.moveLinkToIndex !== -1) {
            const newLinksArr: Array<Linkinter> = [...linksArr];

            const movingThisLink = popItemAtIndex(newLinksArr, replacementData.moveLinkOnIndex);
            let movingToIndex = replacementData.moveLinkToIndex;
            if (replacementData.moveLinkOnIndex < replacementData.moveLinkToIndex) movingToIndex - 1;
            insertItemAtIndex(newLinksArr, movingToIndex, movingThisLink);
            setReplacementData({
                moveLinkOnIndex: -1, 
                moveLinkToIndex: -1
            });
            setLinksArr(newLinksArr);
            OnChange();
        }

    }, [
        replacementData
    ]);

    return (
        <div
        className="
        EditableLinkArea

        w-full

        items-start
        justify-start
        ">

            {
                (linksArr).map((linkItem: Linkinter, index: number) => {
                    // return <EditableLink key={index} text={linkItem.text} url={linkItem.url} icon={(linkItem.icon) ? linkItem.icon : ""} />
                    return (
                        <div key={"PreviewLink" + index.toString()} className="flex-col justify-start items-start w-full">
                            <DropArea index={index} setReplacementData={setReplacementData} />
                            <EditableLink index={index} linkItem={linkItem} setLinkItem={(newLinkItem: Linkinter) => {
                                let newLinksArr: Array<Linkinter> = [...linksArr];
                                newLinksArr[index] = newLinkItem;
                                setLinksArr(newLinksArr);
                            }} 
                            OnChange={() => {OnChange()}}/>
                        </div>
                    );
                    
                })
            }
            <DropArea index={linksArr.length} setReplacementData={setReplacementData}/>

        </div>
    );
}