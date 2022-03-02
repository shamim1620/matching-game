import React from 'react';
import './CardItem.css';

const CardItem = ({ item }) => {
    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img width="100%" height="170px" src={item.image} alt="Avatar" />
                    </div>
                    <div class="flip-card-back">
                        <img></img>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardItem;