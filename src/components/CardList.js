import React from 'react';
import Card from './Card';
import ListGroup from './ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardList = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="row">
        {
          data.map((item, i) => {
            if(item){
              let cardBody = {
                'TotalConfirmed': item['TotalConfirmed'],
                'TotalDeaths': item['TotalDeaths'],
                'TotalRecovered': item['TotalRecovered']
              }
              return (
                <div className="col-md-6 mb-4" key={i}>
                  <Card
                    key={i}
                    header={item['Country']}
                    CardStyle={"mb-2"}
                  >

                    <p><FontAwesomeIcon icon={['fad', item['icon']]} size="6x" /></p>
                    <ListGroup list={cardBody} />
                  </Card>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default CardList;