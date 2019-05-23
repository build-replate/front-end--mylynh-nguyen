import React from 'react';
import Food from './Food';

// const FoodList = (props) => {
//     const {food} = props;
//     const FoodList = food.map(
// }

export default function Requests(props) {
    props.requests.map(renderRequest)
}

function renderRequest(request, i) {
    return <div key={i}>request.data</div>
} 



