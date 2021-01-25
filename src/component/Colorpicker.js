import { useContext } from "react"
import { SketchPicker } from "react-color"
import { sendcolor } from "../service/socketServices"
import setColorContext from "../context/Context"

function ColorPicker() {
    const { color, setColor } = useContext(setColorContext);
    const handleChange = () => {
        sendcolor(color);
    }

    return (

        <div class="container">
            <style>{'body {background-color:' + color + '};'}</style>
            <div class="row">
                <div class="col align-self-center">
                    <SketchPicker
                        color={color}
                        onChange={updatedColor => setColor(updatedColor.hex)}
                    />
                </div>
            </div>
            <div class="row">
                <div class="col align-self-center">
                    <h1>The color which is chosen is:{color}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col align-self-center">
                    <button className="btn btn-outline-light" onClick={handleChange}>SEND COLOR</button>
                </div>
            </div>

        </div>

    )

}
export default ColorPicker;

