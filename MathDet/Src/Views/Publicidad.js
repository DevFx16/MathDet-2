import React from 'react';
import { AdMobBanner, AdMobInterstitial } from 'expo';

export default class Publicidad extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AdMobInterstitial.setAdUnitID('ca-app-pub-9624629768425340/6694440480');
        AdMobInterstitial.requestAdAsync().then(json => {
            AdMobInterstitial.showAdAsync();
        });
    }

    render() {
        return (
            <AdMobBanner
                style={{ position: 'absolute', bottom: 0 }}
                bannerSize='fullBanner'
                adUnitID='ca-app-pub-9624629768425340/6267065070' />
        );
    }
}