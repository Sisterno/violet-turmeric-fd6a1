import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';
import MyProjectCard from "./miniComponets/MyProjectCard"

export default class SectionTest extends React.Component {
    render() {
        // const section = _.get(this.props, 'section');
        // const sectionId = _.get(section, 'section_id');
        // const title = _.get(section, 'title');
        // const image = _.get(section, 'image');
        // const imageAlt = _.get(section, 'image_alt', '');
        // const content = _.get(section, 'content');
        // const actions = _.get(section, 'actions');
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        // const image = _.get(section, 'image');
        // const imageAlt = _.get(section, 'image_alt', '');
        const content = _.get(section, 'content');Subtext
        // const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block block-text ">
                {title && <h2 className="block-title inner-sm project-title">{title}</h2>}
                {/* {image && (
                    <div className="block-image">
                        <img src={withPrefix(image)} alt={imageAlt} />
                    </div>
                )} */}
                {/* {content && <div className="block-content inner-sm">{markdownify(content)}</div>} */}
                {/* {!_.isEmpty(actions) && (
                    <div className="block-buttons inner-sm">
                        <CtaButtons actions={actions} />
                    </div>
                )} */}
                
                {!_.isEmpty(content) && (
                    <div className='project-cards-container'>
                        {
                            content.map((e)=>{
                                return(
                                    <MyProjectCard 
                                        text={e['Mini-titulo']}
                                        img={withPrefix(e['image'])}
                                    />
                                // <div className="block-buttons inner-sm">
                                //     <img src={withPrefix(e['image'])} alt={e['imageAlt']} />
                                //     {e['Mini-titulo']}
                                // </div>
                                )
                            })
                        }
                    </div>
                )}
            </section>
        );
    }
}
