import React from 'react'
import Modal from './Modal'

export default class PocketPanel extends React.Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    render() {
        return (
            <div class="bg-white rounded-lg p-4 border-2 h-24 font-semibold text-gray-700 text-center align-middle cursor-pointer" onClick={e => {
                this.showModal(e);
              }} >
                <span class="text-2xl inline-block align-text-middle">
                    00 / 00
                </span>
                <div class="align-text-bottom text-gray-400 mt-2">
                    { this.props.label }
                </div>
                 <Modal label={this.props.label} onClose={this.showModal} show={this.state.show} />
            </div>
        )
    }

}