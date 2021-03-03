import React from 'react';
import MainPanel from './MainPanel'
import { createPdfFromHtml } from "./PrintPDF/logic";

class Budget extends React.Component {
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
            <div class="grid-cols-1 w-9/12 gap-2">
                <div class='container md:container-sm bg-white m-6 h-96 border-2 p-8 rounded-lg w-7/8 md:w-7/8 flex-initial'>
                    <h2 class="text-xl mb-4 text-center">Budget breakdown</h2>

                    <h3 class="text-lg font-semibold">Category</h3>
                    <div class="border-b-2 border-gray-100 m-auto my-2 py-2 font-normal w-7/8">
                        <div class="inline-block w-4/5 text-left pl-4">Budget</div>
                        <div class="inline-block w-1/5 text-right pr-4">$0</div>
                    </div>
                    <div class="border-b-2 border-gray-100 m-auto my-2 py-2 font-normal w-7/8">
                        <div class="inline-block w-4/5 text-left pl-4">Budget</div>
                        <div class="inline-block w-1/5 text-right pr-4">$0</div>
                    </div>
                    <div class="border-b-2 border-gray-100 m-auto my-2 py-2 font-normal w-7/8">
                        <div class="inline-block w-4/5 text-left pl-4">Budget</div>
                        <div class="inline-block w-1/5 text-right pr-4">$0</div>
                    </div>
                    <button class="flex items-center py-2 px-8  text-gray-700 border-4 border-purple-600" onClick={this.handleClick}>print</button>
                </div>
            </div>
              </div>
          </div>
        </div>,
            
            </>
          );
        }
      
        handleClick = () => {
          createPdfFromHtml(this.printContent);
        };
    }
        
    


export default Budget
