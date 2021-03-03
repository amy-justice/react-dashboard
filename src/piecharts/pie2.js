import React, { Component } from "react";
import C3Chart from "./c3chart";
import * as d3 from "d3";
import escape from "lodash/escape";
import orderBy from "lodash/orderBy";

import "c3/c3.css";
import "./App.css";

const data1 = {
  name: "Emails",
  total: 1230,
  total_recipients: 1162,
  languages: [
    {
      name: "Rent",
      code: "EN",
      count: 80,
      roles: [
        { name: "Admins", count: 102 },
        { name: "Teachers", count: 343 },
        { name: "Students", count: 55 },
        { name: "Guardians", count: 0 }
      ]
    },
    {
      name: "Other",
      code: "",
      count: 2,
      roles: [
        { name: "Admins", count: 102 },
        { name: "Teachers", count: 343 },
        { name: "Students", count: 55 },
        { name: "Guardians", count: 0 }
      ]
    },
    {
      name: "Germany",
      code: "GR",
      count: 3,
      roles: [
        { name: "Admins", count: 102 },
        { name: "Teachers", count: 343 },
        { name: "Students", count: 55 },
        { name: "Guardians", count: 0 }
      ]
    },
    {
      name: "Sweden",
      code: "SWE",
      count: 4,
      roles: [
        { name: "Admins", count: 102 },
        { name: "Teachers", count: 343 },
        { name: "Students", count: 55 },
        { name: "Guardians", count: 0 }
      ]
    }
  ].sort((a, b) => b.count - a.count)
};

const data2 = {
  name: "Emails",
  total: 1230,
  total_recipients: 1162,
  languages: [
    {
      name: "Rent",
      code: "Housing",
      count: 5,
      roles: [
        { name: "Power", count: 102 },
        { name: "Water", count: 5 },
        { name: "Energy", count: 20 },
        { name: "Maintenance", count: 20 }
      ]
    },
    {
      name: "Food",
      code: "Food",
      count: 2,
      roles: [
        { name: "Groceries", count: 102 },
        { name: "Takeaways", count: 50 },
        
      ]
    },
    {
      name: "Transport",
      code: "Transport",
      count: 2,
      roles: [
        { name: "Petrol", count: 102 },
        { name: "Car Repayments", count: 43 },
        { name: "Maintenance", count: 55 },
        { name: "Public Transport", count: 10 }
      ]
    },
    {
      name: "Kids",
      code: "Kids",
      count: 1,
      roles: [
        { name: "School", count: 102 },
        { name: "Presents", count: 43 }
      ]
    },
    {
      name: "Medical",
      code: "Medical",
      count: 1,
      roles: [
        { name: "Doctors", count: 30 },
        { name: "Optometrist", count: 30 },
        { name: "Dentist", count: 30 }
      ]
    },
    {
      name: "Debt",
      code: "Debt Payments",
      count: 1,
      roles: [
        { name: "Student Debt", count: 102 },
        { name: "Credit Card Debt", count: 343 }
      ]
    }
    
  ]
};
const data_2_languages = orderBy(
  data2.languages,
  ["count", "name"],
  ["desc", "asc"]
);
data_2_languages.push({
  name: "Savings",
  code: "Savings",
  count: 2,
  roles: [
    { name: "Admins", count: 102 }
 
  ]
});

const COLORS_1 = [
  "#7b32a8",
  "#023457",
  "#034266",
  "#055E83",
  "#096C9A",
  "#0E71B7",
  "#1275D1",
  "#1778E7",
  "#1A76DB",
  "#1F73CE"
];

const COLORS_2 = [
  "#7b32a8",
  "#743c96",
  "#7c3fa1",
  "#8946b3",
  "#974fc4",
  "#a34ed9",
  "#a34ed9",
  "#af4af0",
  "#096C9A",
  "#0B6FA9",
  "#0E71B7",
  "#1073C4",
  "#1275D1",
  "#1477E0",
  "#1778E7",
  "#1977E1",
  "#1A76DB",
  "#1D75D6",
  "#1F73CE",
  "#2371C4"
];

const config = {
  color: {
    pattern: COLORS_2
  },
  legend: {
    show: false
  },
  onrendered: function() {
    this.selectChart.selectAll(".c3-chart-arc text").each(function() {
      const element = d3.select(this);
      const [code, percentages] = element.text().split(" ");

      element.text("");

      if (code) {
        element.append("tspan").text(code);
      }

      element
        .append("tspan")
        .text(percentages)
        .attr("x", 0)
        .attr("y", code ? 18 : 9);
    });
  }
};

const chart1 = {
  data: {
    type: "donut",
    columns: data1.languages.map(language => [language.name, language.count]),
    order: "asc"
  },
  donut: {
    width: 70,
    label: {
      threshold: 0,
      format: function(value, ratio, id) {
        var language = data1.languages.find(language => language.name === id);

        return `${language.code} ${d3.format("%")(ratio)}`;
      }
    }
  },
  tooltip: {
    contents: ([d], defaultTitleFormat, defaultValueFormat, color) => {
      const language = data1.languages.find(language => language.name === d.id);
      const percentage = d3.format(".0%")(d.ratio);
      const roles = [];
      const name = escape(language.name);

      language.roles.forEach(role => {
        const name = escape(role.name);
        const count = escape(role.count);

        roles.push(`
                    <li class="c3-signalkit-tooltip__row">
                        <span>${name}</span> <span>${count}</span>
                    </li>
                `);
      });

      return `
                <ul class="c3-signalkit-tooltip">
                    <li class="c3-signalkit-tooltip__title c3-signalkit-tooltip__row">
                        <span>${name}</span> <span>${percentage}</span>
                    </li>
                    ${roles.join("")}
                </ul>
            `;
    }
  }
};

const chart2 = {
  data: {
    type: "donut",
    columns: data_2_languages.map(language => [language.name, language.count]),
    order: null
  },
  donut: {
    width: 70,
    label: {
      threshold: 0,
      format: function(value, ratio, id) {
        var language = data_2_languages.find(language => language.name === id);

        return `${language.code} ${d3.format(".0%")(ratio)}`;
      }
    }
  },
  tooltip: {
    contents: ([d], defaultTitleFormat, defaultValueFormat, color) => {
      const language = data_2_languages.find(
        language => language.name === d.id
      );
      const percentage = d3.format(".0%")(d.ratio);
      const roles = [];
      const name = escape(language.name);

      language.roles.forEach(role => {
        const name = escape(role.name);
        const count = escape(role.count);

        roles.push(`
                    <li class="c3-signalkit-tooltip__row">
                        <span>${name}</span> <span>${count}</span>
                    </li>
                `);
      });

      return `
                <ul class="c3-signalkit-tooltip">
                    <li class="c3-signalkit-tooltip__title c3-signalkit-tooltip__row">
                        <span>${name}</span> <span>${percentage}</span>
                    </li>
                    ${roles.join("")}
                </ul>
            `;
    }
  }
};

class Pie2 extends Component {
  render() {
    return <C3Chart {...config} {...chart2} className="chart" />;
  }
}

export default Pie2;