// React imports --------------------------------

import { useState } from "react";

// ----------------------------------------------

export default function DropArea(
    {
        index, 
        setReplacementData
    }:
    {
        index: number, 
        setReplacementData: Function
    }
) {
    const [dragoverState, setDragoverState] = useState<boolean>(false);

    return (
        <div
        onDragEnter={(event: any) => {
            event.preventDefault();
            setDragoverState(true);
        }}
        onDragExit={(event: any) => {
            event.preventDefault();
            setDragoverState(false);
        }}
        onDragOver={(event: any) => {
            event.preventDefault();
        }}
        onDrop={(event: any) => {
            event.preventDefault();
            // console.log(event.dataTransfer.getData("text"));
            setReplacementData({
                moveLinkOnIndex: parseInt(event.dataTransfer.getData("text")), 
                moveLinkToIndex: index, 
            });
            setDragoverState(false);
        }}
        className="
        DropArea

        w-full

        transition-all
        "
        style={{
            height: (dragoverState) ? "12rem" : "2rem", 
            backgroundColor: (dragoverState) ? "rgba(255,255,255,0.2)" : "", 
            margin: (dragoverState) ? "0.5rem 0 0.5rem 0" : "", 
        }}>

        </div>
    );
}