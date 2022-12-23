import React from 'react';
import { connect } from 'react-redux';
import { SelectableTile, Button } from '@carbon/react';
import { updateComponents } from '../../actions/components';
import '../../App.scss';

class Components extends React.PureComponent {
  updateComponentList = (component) => {
    if (this.props.selectedComponents.includes(component)) {
      let filteredArray = this.props.selectedComponents.filter(item => item !== component)
      this.props.updateComponents(filteredArray);
    } else {
      this.props.updateComponents([...this.props.selectedComponents, component]);
    }
  }

  render = () => {
    return (
      <div className='components-container'>
        Select the parts to assemble
          <div className='components-tiles' role="group" aria-label="selectable tiles">
            {
              this.props.components.map((tile, index) => (
                <SelectableTile id={"selectable-tile-" + index} name="tiles" onClick={() => this.updateComponentList(tile.id)}>
                  {tile.title}
                  <img src={tile.img} alt={tile.title} />
                </SelectableTile>
              ))
            }
          </div>
          <Button className='components-btn' onClick={() => this.props.history.push('/assemble')}>Assemble</Button>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    components: state.components.completeSet,
    selectedComponents: state.components.data,
  };
};

const mapDispatchToProps = {
  updateComponents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Components);