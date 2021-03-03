import React from "react";
//import Budget from "../Budget"
import { createPdfFromHtml } from "./PrintPDF/logic";



export class PrintPage extends React.Component {
  printContent;
  render() {
    return (
      <>
        
        
        <div id="print" >
          
          <div >
            <div
              ref={el => {
                this.printContent = el;
              }}
            >
        gay
            </div>
          </div>
        </div>
        <button class="flex items-center py-2 px-8  text-gray-700 border-r-4 border-purple-600" onClick={this.handleClick}>print</button>
      </>
    );
  }

  handleClick = () => {
    createPdfFromHtml(this.printContent);
  };
}



