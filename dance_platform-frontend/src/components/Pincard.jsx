function Pincard({ pin }) {
    return (
        <div className="overflow-hidden rounded-xl bg-neutral-800 shadow-md transition-transform transform hover:scale-120 hover:shadow-lg">
            {pin.type === 'image' ? (
                <img
                    src={pin.src}
                    alt=""
                    className="w-full h-auto object-cover rounded-xl"
                />
            ) : (
                <video
                    src={pin.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover rounded-xl"
                    controls={false}
                />
            )}
        </div>
    );
}

export default Pincard;
