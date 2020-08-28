import React from 'react';
import Good from './Good';
import { IGroup} from './interfaces';

interface IProps {
    group: IGroup
}

const Group: React.FC<IProps> = ({ group }) => {
    return (
        <div className='group'>
            <h4>{group.groupName}</h4>
            <div>
                {
                    !group.items.length ? <p>Товаров данной группы нет в наличии</p> : group.items.map((good, index) => <Good good={good} key={index} />)
                }
            </div>
        </div>
    )
}

export default Group;