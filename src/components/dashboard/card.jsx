  import React from "react";
  import cardData from './cardData';
console.log(cardData);

  export default function Card() {
  return (
     <div className="row g-6 mb-6">
      
            {/* Repeat for each card */}
            {cardData.map((card, index) => (
              <div className="col-xl-3 col-sm-6 col-12" key={index}>
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <span className="h6 font-semibold text-muted text-sm d-block mb-2">{card.title}</span>
                        <span className="h3 font-bold mb-0">{card.value}</span>
                      </div>
                      <div className="col-auto">
                        <div className={`icon icon-shape ${card.iconBg} text-white text-lg rounded-circle`}>
                          <i className={`bi ${card.icon}`}></i>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 mb-0 text-sm d-flex align-items-center justify-content-between">
                      <span className={`badge badge-pill bg-soft-${card.trendType} text-${card.trendType} me-2`}>
                        <i className={`bi ${card.trendIcon} me-1`}></i>{card.trend}
                      </span>
                      <span className="text-nowrap text-xs text-muted">{card.since}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  );
}