

function LayoutCard({ currentLayout, setCurrentLayout }) {
    return (
        <div className='layout-btns'>
            <button className='layout' id='left' onClick={() => setCurrentLayout(0)} disabled={currentLayout === 0 ? true : false} >
                <div className='layout-scheme'>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <p>Left</p>
            </button>

            <button className='layout' id='right' onClick={() => setCurrentLayout(1)} disabled={currentLayout === 1 ? true : false} >
                <div className='layout-scheme'>
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <p>Right</p>
            </button>
        </div>
    )
}

export default LayoutCard;