import React from "react";
import PropTypes from "prop-types";

export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.show) {
            return null;
          }
          return (
            <div class="h-screen w-screen bg-opacity-70 bg-gray-700 top-0 left-0 absolute justify-center flex items-center">
                <div class="bg-white rounded shadow p-8 m-4 max-w-md max-h-full text-center" id="modal">
                    <h2 class="text-xl mb-4">{this.props.label} Breakdown</h2>
                    <div class="border-b-2 border-gray-100 my-2 py-2 font-normal w-80">
                        <div class="inline-block w-60 text-left">Budget</div>
                        <div class="inline w-20 text-right">$0</div>
                    </div>
                    <div class="border-b-2 border-gray-100 my-2 py-2 font-normal w-80">
                        <div class="inline-block w-60 text-left">Budget</div>
                        <div class="inline w-20 text-right">$0</div>
                    </div>
                    <div class="actions">
                        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold mt-6 py-2 px-4 rounded" onClick={this.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}



Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };