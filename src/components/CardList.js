import React from 'react';
import Card from './Card';
import ListGroup from './ListGroup';

const CardList = ({ data }) => {
  return (
    <div>
      <div className="row">
        {
          data.map((item, i) => {
            let cardBody = {
              'TotalConfirmed': item['TotalConfirmed'],
              'TotalDeaths': item['TotalDeaths'],
              'TotalRecovered': item['TotalRecovered']
            }
            return (
              <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                <Card
                  key={i}
                  header={item['Country']}
                  CardStyle={"mb-2"}
                >
                  <ListGroup list={cardBody} />
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default CardList;