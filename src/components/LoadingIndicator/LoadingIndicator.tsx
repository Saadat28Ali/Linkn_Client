export default function LoadingIndicator(
) {
    return (
        <div
        className={`
        LoadingIndicator

        h-5
        w-5
        border-2
        border-white
        border-t-[rgba(255,255,255,0.5)]
        border-r-[rgba(255,255,255,0.5)]
        rounded-full
        box-border
        
        animate-spin
        `}>
        </div>
    );
}