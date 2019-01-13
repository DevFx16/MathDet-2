import React from 'react';
import { AdMobBanner, AdMobInterstitial } from 'expo';

export default class Publicidad extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AdMobInterstitial.setAdUnitID('ca-app-pub-2081995568317845/6113933706');
        AdMobInterstitial.requestAdAsync().then(json => {
            AdMobInterstitial.showAdAsync();
        });
    }

    render() {
        return (
            <AdMobBanner
                style={{ position: 'absolute', bottom: 0 }}
                bannerSize='fullBanner'
                adUnitID='ca-app-pub-2081995568317845/2557832079' />
        );
    }
}