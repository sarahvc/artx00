import React, { Component } from 'react';
import BidPopup from './BidPopup';
import PlayPopup from './starter/PlayPopup';
import Info from '../atoms/Info';
import upcaret from '../../styles/assets/upcaret.svg';
import eth from '../../styles/assets/ethereum.svg';
import ethgreen from '../../styles/assets/ethereumgreen.svg';
import ethpurple from '../../styles/assets/ethereumpurple.svg';
import '../../styles/scss/play.scss';

export default class Above extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //api
            diffAppraisal: '92347.283',
            currentPrice: '6543.826',
            jackpot: '34059.3423', 
            rewards: '34059.3423'
        };
    };

    // componentDidMount() {
    //     this.setState({showPlay: true});
    // }

    // componentWillUnmount() {
    //     this.setState({showPlay: false});
    // }

    render() {
        const jpWidth = {
            width: parseFloat(this.state.jackpot)/(parseFloat(this.state.jackpot) + parseFloat(this.state.rewards))*100 + '%'
        };
        const { diffAppraisal, currentPrice, jackpot, rewards } = this.state;
        return (
            <div className='position-relative pt-5'>
                <PlayPopup/>
                <div className='my-5'> 
                    <p className='text-right artx-gradient-text artx-type-tw'><i>Genesis</i>, the first blockchain-based artwork is now on auction!</p>
                    <p className='artx-explaination ml-auto amy-8 text-right text-white artx-type-st'>Lot 001 <i>Genesis</i><br/><i>Genesis</i> is a crowdsourced and decentralized blockchain-based data visualization artwork that evolves in real-time. Your wallet address, bid amount and bid time will serve as data input for the creation<br/>of <i>Genesis</i>.</p>
                    <p className='text-right artx-gradient-text artx-type-fs mb-3'><img className='align-middle mr-3' src={upcaret} alt='' aria-hidden='true'/>{currentPrice}<img className='align-baseline ml-3' src={eth} alt='ethereum icon'/></p>
                    <BidPopup/>
                </div>
                <div>
                    <p className='artx-type-tw artx-gradient-text'>Auction Hardcap Remaining <Info/></p>
                    <p className='artx-type-tw artx-gradient-text mb-4'>{diffAppraisal}<img className='artx-eth-s align-top ml-2' src={eth} alt='ethereum icon'/></p>
                    
                    <div className='artx-jackpot-status'>
                        <div className='d-flex justify-content-between mb-2'>
                            <p className='artx-green artx-type-et'>Jackpot<br/>
                            {jackpot}<img className='artx-green align-top ml-1' src={ethgreen} alt='ethereum icon'/></p>
                            <p className='artx-purple artx-type-et'>Rewards<br/>
                            {rewards}<img className='artx-purple align-top ml-1' src={ethpurple} alt='ethereum icon'/></p>
                        </div>
                        <div className='artx-jackpot-percent d-flex w-100'>
                            <div className='h-100' style={jpWidth}></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    };

};