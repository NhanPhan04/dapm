const SmallButton = ({ text, colortext, func }) => {
    return (
        <div
            className="rounded-md hover:text-orange-400 px-3 py-1 cursor-pointer bg-light-grey text-sm font-semibold"
            style={{ color: colortext }}
            onClick={func} 
        >
            {text}
        </div>
    );
};

export default SmallButton;
