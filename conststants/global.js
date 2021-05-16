import React, {useEffect, useState} from 'react';
import { Dimensions } from "react-native";

export const Bottom = {
    dark: false,
    colors: {
        primary: '#000',
        card: '#000',
        text: 'rgb(28, 28, 30)',
        notification: 'rgb(255, 69, 58)',
    },
};

export const getImages = (img) => {
    switch (img) {
        case 'Image_01.png':
            return require('../assets/images/Image_01.png');
        case 'Image_02.png':
            return require('../assets/images/Image_02.png');
        case 'Image_03.png':
            return require('../assets/images/Image_03.png');
        case 'Image_05.png':
            return require('../assets/images/Image_05.png');
        case 'Image_06.png':
            return require('../assets/images/Image_06.png');
        case 'Image_07.png':
            return require('../assets/images/Image_07.png');
        case 'Image_08.png':
            return require('../assets/images/Image_08.png');
        case 'Image_10.png':
            return require('../assets/images/Image_10.png');
        default:
            return require('../assets/images/pastel.jpeg');
    }
};

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};


export const data = [1, 0, 1, 0, 1, 0, 1, 0, 1];
