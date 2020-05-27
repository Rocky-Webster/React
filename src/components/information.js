import React from 'react';

function Information() {
    return(
        <div className="content">
            <div className="content__inner">
                <img src="https://images.unsplash.com/uploads/14129139211534d5c7559/074197b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" className="content__bgPhoto"></img>
                <div className="content__avatarBg">
                    <img src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80" className="content__avatar"></img>
                    <div className="content__title">
                        <h3 className="conttent__name">Rocky Webster</h3>
                        <div className="contetn__information">
                            <p className="content__information-text">
                                Your status here
                            </p>
                            <p className="content__information-text">
                                City: L.A.
                            </p>
                            <p className="content__information-text">
                                Age: 18
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;