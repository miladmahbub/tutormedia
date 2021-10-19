import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { detailId } = useParams();
    return (
        <div>
            <h2>This is Details About This Service : {detailId}</h2>
        </div>
    );
};

export default Detail;