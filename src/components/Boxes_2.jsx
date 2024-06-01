import styles from "../style";

// MAP SPEAKERS AND THEIR STORIES

const Boxes_2 = ({ content, name, title, img }) => (
    <div
        className={`flex justify-between flex-col px-1 py-1 md:mr-10 sm:mr-5 mr-2 my-5 mx-2  
    w-[400px] h-[250px] rounded-3xl feedback-card shadow-lg p-[5%] bg-button-gradient_2`}>
        <div
            className={`flex flex-row w-[100%] h-[100%] rounded-3xl 
      shadow-lg bg-primary bg-opacity-50 mr-2`}>
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center my-2 mx-6 overflow-hidden  ">
                {/* Use overflow-hidden to maintain aspect ratio */}
                <img
                    className="w-full h-full object-cover rounded-full "
                    src={img}
                    alt={name}
                />
            </div>

            <div className="flex flex-col">
                <h4 className="font-poppins text-[25px] font-bold leading-[15px] text-white my-3 mx-1">
                    {name}
                </h4>
                <h5 className="font-poppins text-[17px] font-semibold w-[240px] h-[40px] leading-[17px] text-white my- mx-1">
                    {title}
                </h5>
            </div>
        </div>
        <p className="font-poppins font-normal text-[15px] leading-[18px] text-black my-3 mx-3">
            {content}
        </p>
    </div>
);

export default Boxes_2;
