import './loader.css'
function Loader() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0 z-[99999] bg-[#0009] backdrop-blur-sm">
                <div className="loading"></div>
            </div>
        </>

    );
}

export default Loader;