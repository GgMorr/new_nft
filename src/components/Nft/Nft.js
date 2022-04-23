import React, { Component } from 'react';
import NftSingle from './NftSingle';

class Nft extends Component {
    renderItems() {
        return this.props.items.map((item) => (
            <NftSingle key={item.id} item={item} />
        ));
    }

    render() {
        return (
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default Nft;
