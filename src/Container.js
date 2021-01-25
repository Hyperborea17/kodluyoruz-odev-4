import { useContext, useEffect } from "react";
import ColorContext from "./context/Context";
import { initSocket, disconnectSocket, receiveColor } from "./service/socketServices";
import ColorPicker from "./component/Colorpicker"

function Container() {
    const { color, setColor } = useContext(ColorContext);

    useEffect(() => {
        initSocket();
        receiveColor(color => {
            console.log("the color:", color);
            setColor(color);
        })
        return () => disconnectSocket();
    }, [setColor])
    return (
        <div style={{ backgroundColor: color }}>
            <ColorPicker />
        </div>
    )
}
export default Container;