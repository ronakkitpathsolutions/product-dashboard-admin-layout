import React from 'react'
import ReactImageMagnify from "react-image-magnify";

const Magnify = ({ image, ...props }) => {
    return (
        <div {...props} >
            <div className="fluid">
                <div>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: image
                        },
                        largeImage: {
                            src: image,
                            width: 1200,
                            height: 2400,
                        },
                        enlargedImageContainerDimensions: {
                            width: '100%',
                            height: '100%'
                        },
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Magnify