import { HexColorPicker } from "react-colorful";

function ThemeColorCard({ currentTheme, setCurrentTheme, saveCurrentTheme, resetThemeColor }) {
    return (
        <div className='theme-btns'>
            <HexColorPicker color={currentTheme} onChange={setCurrentTheme} onBlur={() => saveCurrentTheme(currentTheme)} />
            <br />
            <button onClick={resetThemeColor} id='reset' >Reset</button>
        </div>
    )
}

export default ThemeColorCard;