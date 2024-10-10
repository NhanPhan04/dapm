const SmallButton = ({ text, colortext, func }) => {
    return (
        <div
            className="rounded-md px-3 py-2 cursor-pointer bg-light-grey text-sm font-semibold"
            style={{ color: colortext }}
            onClick={func} 
        >
            {text}
        </div>
    );
};

export default SmallButton;
