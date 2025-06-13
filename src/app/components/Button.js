export default function Button({ classes, type, onClick, text }) {
    return <button className={"size-100 border-solid border-1 border-(--foreground) rounded-lg duration-300 ease-in-out cursor-pointer h-14 w-full flex justify-center items-center gap-2" + classes}
        type={type}
        onClick={onClick}>
        {text}</button>
}