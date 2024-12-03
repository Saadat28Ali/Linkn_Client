// Interface imports ----------------------------

import { Linkinter } from "../Link/Link";

// Enum imports ---------------------------------

import { formTextInputSizes } from "../FormTextInput/FormTextInput";

// Component imports ----------------------------

import FormTextInput from "../FormTextInput/FormTextInput";

// ----------------------------------------------

export default function EditableLink(
    {
        index, 
        linkItem, 
        setLinkItem, 
        OnChange
    }:
    {
        index: number, 
        linkItem: Linkinter, 
        setLinkItem: Function, 
        OnChange: Function
    }
) {
    const __id: string = Math.random().toString();
    const localLinkItem: Linkinter = {
        text: linkItem.text, 
        url: linkItem.url, 
        icon: linkItem.icon
    }

    return (
        <div
        draggable
        onDragStart={(event: any) => {
            event.dataTransfer.setData("text", index.toString());
        }}
        className="
        EditableLink

        w-full
        rounded-lg
        bg-white
        p-2
        ">
            <div
            className="
            w-full
            
            flex
            flex-row
            items-center
            justify-evenly
            ">
                <div
                className="
                h-full
                mr-2
                
                flex-col
                items-start
                justify-evenly
                "
                >

                    <input type="file" multiple={false}
                    id={__id + "linkIconImageInput"}
                    onChange={(event: any) => {
                        // console.log(event.target.files[0]);
                        // const file = event.target.files[0] as string;

                        const reader: FileReader = new FileReader();
                        reader.readAsDataURL(event.target.files[0]);
                        reader.onload = () => {
                            const result = reader.result as string;
                            // console.log(result.slice(22, result.length));
                            localLinkItem.icon = result.slice(22, result.length);
                            setLinkItem(localLinkItem);
                            OnChange();
                        }
                    }}
                    className="
                    LinkIconImageInput

                    invisible
                    w-0
                    h-0
                    "/>
                    
                    <label htmlFor={__id + "linkIconImageInput"}
                    className="
                    w-20
                    h-20
                    rounded-lg
                    border-2
                    border-dashed
                    border-customGray

                    text-customBlack
                    font-bold
                    leading-tight
                    p-5
                    flex
                    flex-col
                    items-center
                    justify-center
                    select-none
                    text-center
                    cursor-pointer
                    transition-all
                    hover:bg-blue-500
                    hover:text-white
                    hover:scale-105
                    "
                    > Upload Icon </label>
                    
                    <div
                    className="

                    h-20
                    w-20
                    max-h-20
                    max-w-20
                    
                    overflow-clip
                    ">
                        <img src={"data:image/png;base64," + linkItem.icon} alt={linkItem.icon} className="
                        size-10

                        object-fill
                        "/>
                    </div>

                </div>


                {/* <input id="linkTextInput" type="text" defaultValue={text}/> */}
                <div
                className="
                w-full
                
                items-start
                ">
                    <FormTextInput 
                    id={__id + "linkTextInput"}
                    placeholder="Link Text"
                    type="text"
                    label="Link Text"
                    defaultValue={linkItem.text}
                    size={formTextInputSizes.small}
                    OnChange={(event: any) => {
                        localLinkItem.text = event.target.value;
                        setLinkItem(localLinkItem);
                        OnChange();
                    }}
                    incorrectInputState={false}
                    setIncorrectInputState={() => {}}
                    />

                    <FormTextInput 
                    id={__id + "linkUrlTextInput"}
                    placeholder="Url"
                    type="text"
                    label="Url"
                    defaultValue={linkItem.url}
                    size={formTextInputSizes.small}
                    OnChange={(event: any) => {
                        localLinkItem.url = event.target.value;
                        setLinkItem(localLinkItem);
                        OnChange();
                    }}
                    incorrectInputState={false}
                    setIncorrectInputState={() => {}}
                    />

                </div>
                {/* <input id="linkUrlTextInput" type="text" defaultValue={url}/> */}

                <div
                className="
                p-5
                select-none
                text-customGray
                "
                >
                    &#x283F;
                </div>
            </div>
        </div>
    );
}